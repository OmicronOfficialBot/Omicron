const Client = require("./core/Omicron");
const Omicron = new Client();
const fs = require("fs");
Omicron.start();

fs.readdirSync("./managers").then(managers => { for(let manager of managers) {if(manager.enabled) new (require(`${manager}`);}});
