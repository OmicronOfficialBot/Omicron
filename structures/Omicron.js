const { Client, Collection, GatewayIntentBits } = require("discord.js");
const Logger = require("../helpers/logger.js");
const Config = require("../config");
class Omicron extends Client {
    constructor() {
        super({
            intents: Config.Intents,
        });

    }
}
