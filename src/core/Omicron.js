const { Client, Collection, GatewayIntentBits, ActivityType } = require("discord.js");
const fs = require("fs");
const glob = require("glob");
const database = require("./database");
const logger = require("./logger");
const config = require("../config");
const moment = require("moment");
const CommandManager = require("./managers/CommandManager");
const EventManager = require("./managers/EventManager");
const GuildConfig = require("./models/GuildConfig");
//new (require("./extenders/Guild"));

class Omicron extends Client {
    constructor() {
        super({
            intents: config.intents,
            disableEveryone: config.disableEveryone
        });

        this.logger = new logger("Omicron");
        this.commands = new Collection();
        this.logger.main("Managers");
        this.CommandManager = new CommandManager(this, config);
        this.EventManager = new EventManager(this, config);
        this._connectTime = Date.now();
        require("./database");
        this.once("ready", this.ready.bind(this));
    }
    ready() {
        this.user.setActivity(`-help! + omicron.xyz`, {
            type: ActivityType.Watching
        });
    }
    start() {
        this.login(config.token);
        this._connectTime = (Date.now() - this._connectTime);
        this.logger.main(`Client Connected. Took ${this._connectTime} ms.`);
    }
}

module.exports = Omicron;
