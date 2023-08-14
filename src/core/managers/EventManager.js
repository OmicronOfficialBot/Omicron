const logger = require("../logger")
const config = require("../../config");
const fs = require("fs");

class EventManager {
    constructor(client) {
        this.client = client;
        this.logger = new logger("EventManager");
        this.loadEvents();
        this.logger.main(`Loaded Events!`)

    }
    loadEvents() {
        let path = config.paths.events;
        let files = fs.readdirSync(path);
        for (let file of files) {
            let event = require(`${path}/${file}`);
            this.client.on(file.split(".")[0], (...args) => event(this.client, ...args));
        }
    }
}

module.exports = EventManager;