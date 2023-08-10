class Manager {
    constructor(client, arg) {
        this.client = client;
        this.module = arg.module;
        this.enabled = arg.enabled || false;
        this.log = arg.log;
        if(this.log) client.logger.info(`[${this.module}Module] Successfully loaded module.
    }
}

/* class AutoModextends Module {
   constructor(client) {
       super(client, {
           module: "automod",
           enabled: true,
           log: true,
       });
   }
*/
