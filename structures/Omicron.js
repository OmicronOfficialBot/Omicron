const { Client, Collection, GatewayIntentBits } = require("discord.js");
const Logger = require("../helpers/logger.js");
const Config = require("../config");
const fs     = require("fs");

// Omicron Client
class Omicron extends Client {
    constructor() {
        super({
            intents: Config.Intents,
        });
        this.commands      = new Collection();
        this.users         = new Collection();
        this.aliases       = new Collection();
        this.slashCommands = new Collection();
        this.cooldowns     = new Collection();
        this.modules       = new Collection();
        this.logger        = new Logger(this);
        this.config        = Config;
    }
    log(log) {
        this.logger.log(log);
    }
    error(log) {
        this.logger.error(log);
    }
    info(log) {
        this.logger.info(log);
    }
    warn(log) {
        this.logger.warn(log);
    }
    debug(log) {
        this.logger.debug(log);
    }
    start() {
        // Login to Discord Client
        this.login(Config.Token);
        //
        this.loadCommands(this.config.Directories.Commands);
        this.loadEvents(this.config.Directories.Events);
        //this.loadDashboard();
        //this.loadDatabase();
    }
    loadCommands(dir) {
        // Load Global Commands
        let modules = fs.readdirSync(dir);
        let commands = 0;
        for(let module of modules) {
            let files = fs.readdirSync(`${dir}/${module}`);
            for(let file of files) {
                let command = require(`${dir}/${module}/${file}`);
                return this.debug(command);
                if(!command.name || !command.description || !command.usage) return;
                try {
                    this.commands.set(command.name, command);
                } catch(err) { this.error(err); }
                commands++;
            }
        }
        this.info(`[CommandLoader] Registered ${commands} commands.`);
    }
    loadEvents(dir) {
        let files = fs.readdirSync(dir);
        let events = 0;
        for(let file of files) {
            let event = require(`${dir}/${file}`);
            return this.debug(event);
            if(!event.event) return this.error(`[EventLoader] No event name specified in ${file}!`);
            this.on(event.event, (...args) => event.run(...args));
            events++;
        }
        this.info(`[EventLoader] Registered ${events} events.`);
    }
}

// Export Omicron Client
module.exports = Omicron;
