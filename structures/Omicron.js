const { Client, Collection, GatewayIntentBits } = require("discord.js");
const Logger = require("../helpers/logger.js");
const Config = require("../config");
const fs     = require("fs");
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
    }
    start() {
        // Login to Discord Client
        this.login(Config.Token);
        // Load Clients Base
        this.loadCommands(Config.Directories.Commands);
        this.loadEvents(Config.Directories.Events);
        //this.loadDashboard();
        //this.loadDatabase();
    }
    loadCommands(dir) {
        // Load Guild Commands
        let modules = fs.readdirSync(dir);
        for(let module of modules) {
            let files = fs.readdirSync(`${dir}/${module}`);
            for(let file of files) {
                let command = require(`${dir}/${module}/${file}`);
                
            }
        }
    }
}
