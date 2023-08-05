module.exports = {
    Token: "MTEzMzUwMjE5MDQ3NzEyMzc4Nw.GLT14q.4Z0Ly5cnZnXVhJJsd4GZSHM-ohp_RDSOAeJ3XA",
    Invite: "https://discord.com/api/oauth2/authorize?client_id=1133502190477123787&permissions=70368744177655&scope=bot",
    Intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ],
    Partials: "",
    CommandsDir: `${process.cwd()}/src/commands`,
    EventsDir: `${process.cwd()}/src/events`,
}
