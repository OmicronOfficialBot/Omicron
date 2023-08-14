const Client = require("./core/Omicron");
const Omicron = new Client();
const fs = require("fs");
Omicron.start();

module.exports = Omicron;