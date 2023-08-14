class Command {
    constructor(arg) {
        this.command = arg.command;
        this.description = arg.description;
        this.aliases = arg.aliases || null;
        this.cooldown = arg.cooldown * 1000 || 3 * 1000;
        this.usage = arg.usage || null;
        this.userPermissions = arg.userPermissions || null;
        this.botPermissions = arg.botPermissions || null;
        this.run = arg.run;
    }
}

module.exports = Command;