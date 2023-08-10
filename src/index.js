const Client = require("./core/Omicron");
const Omicron = new Client();
const fs = require("fs");
Omicron.start();

let managers = fs.readdir("./managers");
console.log(managers)