const colors = require("ansicolor");

class Logger {
    constructor(logPrefix) {
        this.logPrefix = `[${logPrefix}] `;
        if(!logPrefix) this.logPrefix = "";
    }
    main(text) {
        console.log(colors.cyan(`${this.logPrefix}${text}`))
    }
    info(text) {
        console.log(colors.cyan(`${text}`));
    }
    error(text) {
        console.log(colors.red(`❌ Error! ${text}`));
    }
    warn(text) {
        console.log(colors.yellow(`⚠️ Warning! ${text}`));
    }
    debug(text) {
        console.log(colors.dim(`⚙️  Debug!`));
        console.log(text);
    }
}

module.exports = Logger;
