const { GatewayIntentBits } = require("discord.js");

module.exports = {
    token: process.env.token,
    invite: "https://discord.com/api/oauth2/authorize?client_id=1140305707225317506&permissions=70368744177655&scope=bot",
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
    partials: "",
    mongo: {
        uri: process.env.uri
    },
    paths: {
        commands: `${process.cwd()}/src/commands`,
        events: `${process.cwd()}/src/events`,
    }
}
