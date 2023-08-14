const GuildConfig = require("../core/models/GuildConfig");

module.exports = async function GuildCreate(guild) {
    new GuildConfig({
        name: guild.name,
        id: guild.id,
        prefix: "!"
    }).save();
    guild.client.logger.main(`New Guild Added!\nGuild Name: ${guild.name}\nGuild ID: ${guild.id}`)
}