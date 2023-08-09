const colors = require("ansicolor");

class Logger {
    constructor(client) {
        this.client = client;
    }
    log(text) {
        console.log(colors.bgCyan(text));
    }
    info(text) {
        console.log(colors.cyan(text));
    }
    error(text) {
        console.log(colors.red("❌ Error! " + text));
    }
    warn() {
        console.log(colors.yellow("⚠️ Warning! " + text));
    }
    debug(text) {
        console.log(colors.dim(`⚙️  Debug!`));
        console.log(text);
    }
}

module.exports = Logger;
