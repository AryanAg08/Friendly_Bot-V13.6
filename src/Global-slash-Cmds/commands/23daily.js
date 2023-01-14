const { SlashCommandBuilder } = require("@discordjs/builders");
const { ChannelTypes } = require("discord.js/typings/enums");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Setup daily words for your server!!!")
    .addChannelOption((optn) => 
    optn
    .setName("channel")
    .setDescription("mention the channel where you want the daily module")
    .setRequired(true)
    .addChannelTypes(ChannelTypes.GUILD_TEXT)
    )
}