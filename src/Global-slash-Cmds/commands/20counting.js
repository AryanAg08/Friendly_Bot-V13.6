const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botcounting")
    .setDescription('Setup your bot counting!!')
    .addSubcommand((cmd) => 
    cmd 
    .setName('channel')
    .setDescription("Create your bot counting channel!!")
    .addChannelOption((opt) => 
    opt 
    .setName("countchannel")
    .setDescription('Channel!!')
    ))
    
    .addSubcommand((cmd) => 
    cmd 
    .setName("goodies")
    .setDescription("Addup random goodies!!")
    )
}