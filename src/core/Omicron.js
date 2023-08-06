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
        this.commands = new Collection();
        this.slashCommands = new Collection();
        this.cooldowns = new Collection();
    }
