require("dotenv").config();
require("./helpers/errors")();

const Client = require("./structures/Omicron.js");
const Omicron = new Client();
Omicron.start();

module.exports = Omicron;
