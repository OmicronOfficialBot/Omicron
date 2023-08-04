// Color Logging Module
const color = require("ansicolor");

// Logging
class Logger {
    constructor(client) {
        this.client = client;
    }
    error(err) {
        console.log(color.red("❌ [Error]!\n" + err));
    }
    info(txt) {
        console.log(color.blue("ℹ️ [Info]\n" + txt));
    }
    warn(txt) {
        console.log(color.yellow("⚠️ [Warning]\n" + txt));
    }
}
                    
