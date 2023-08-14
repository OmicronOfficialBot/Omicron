class Manager {
    constructor(client, arg) {
        this.client = client;
        this.manager = arg.manager;
        this.enabled = arg.enabled || false;
        this.log = arg.log;
        this.logger = 
        if(this.log) client.logger.log(`[${this.manager}Manager] Started Managing.`);
        //if(this.enabled) this.client.modules.push(this);
    }
}

module.exports = Manager;