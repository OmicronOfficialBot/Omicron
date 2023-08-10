const fs = require("fs");

class CommandManager {
    constructor(client) {
        this.client = client;
        super(client, {
            manager: "Command",
            enabled: true,
            log: true,
        });
        this.loadCommands(this.client.config.paths.commands);
    }

    loadCommands(dir) {
        let modules = fs.readdirSync(dir);
        for(let module of modules) {
            let commands = fs.readdirSync(`${dir}/${module}`);
            for(let command of commands) {
                let _command = require(`${dir}/${module}/${command}`);
                this.register(_command);
            }
        }
    }
    
    register(Command) {
        if(!Command.name || !Command.description) return console.error("A command was not registered due to no name or description params.");
        this.client.commands.set(Command, Command.name);
    }
}

module.exports = CommandManager;
