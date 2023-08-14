const { Collection } = require("discord.js");
const logger = require("../logger");
const config = require("../../config");
const fs = require("fs");

class CommandManager {
    constructor(client) {
        this.client = client;
        this.logger = new logger("CommandManager");
        this.loadCommands();
        this.logger.main("Loaded Commands!")
    }
    loadCommands() {
        let path = config.paths.commands;
        let modules = fs.readdirSync(path);
        for(let module of modules) {
            let files = fs.readdirSync(`${path}/${module}`);
            for(let file of files) {
                let command = new (require(`${path}/${module}/${file}`));
                this.register(command)
            }
        }
    }
    register(Command) {
        let name = Command.command;
        let description = Command.description;
        let usage = Command.usage;
        if(!name || !description || !usage) return this.logger.error("Skipped a command due to missing arguments.");
        try {
            this.client.commands.set(name, Command);
        } catch(err) {
            this.logger.error(err);
        }
        this.commands++;
    }
    reload(Command, newCommand) {
        
    }
}

module.exports = CommandManager;