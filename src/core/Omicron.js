const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const glob = require("glob");
const database = require("./database");
const logger = require("./logger");
const config = require("../config");
const moment = require("moment");

class Omicron extends Class {
    constructor() {
        super({
            intents: config.intents,
        });
        // Create Collections
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.aliases = new Collection();
        
        // Create Helpers
        this.logger = new logger(this);
        this.config = config;
    }
    start() {
        this.client.once("ready", this.ready.bind(this));
        this.login(this.config.token);
    }
    
}
