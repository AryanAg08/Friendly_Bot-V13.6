const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("closepvc")
    .setDescription("Close the private voice channels!! Only for mods!!")
}