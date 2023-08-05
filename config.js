const { GatewayIntentBits } = require("discord.js");

module.exports = {
    token: process.env.token,
    invite: "https://discord.com/api/oauth2/authorize?client_id=1133502190477123787&permissions=70368744177655&scope=bot",
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: "",
    paths: {
        commands: `${process.cwd()}/commands`,
        events: `${process.cwd()}/events‘,
    }
}
