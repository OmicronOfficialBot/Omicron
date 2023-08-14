const config = require("../config")
const GuildConfig = require("../core/models/GuildConfig");

module.exports = async function messageCreate(client, message) {
    if(message.author.bot || message.channel.isDMBased()) return;
    
    let guild = message.guild;
    if(message.content === "<@1140305707225317506> invite") return message.channel.send(config.invite);
    
    guild.settings = await GuildConfig.findOne({ id: guild.id});
    guild.prefix = guild.settings.prefix;
    if(!guild.prefix) { new GuildConfig({ name: guild.name, id: guild.id, prefix: "!" }).save(); }
    let args = message.content.slice(guild.prefix.length).trim().split(/ +/);
    let cmd = args.shift().toLowerCase();
    let command = client.commands.get(cmd)
    if(command) command.run(client, message, args);
    //message.channel.send("Prefix: " + message.guild.prefix)
}
