const Command = require("../../command");

const Ping extends Command {
    constructor(client) {
        super(client, {
            command: "ping",
            description: "Get Omicron's Speed",
            aliases: ["latency"],
            cooldown: 3,
            usage: "ping",
            userPermissions: [],
            botPermissions: [],
        });
    }
    run(client, message, args) {
        message.channel.send(`Pong! Latency is \`${client.ws.ping}\`ms!`);
    }
}

module.exports = Ping;
