const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("vote for the users!")
    .addIntegerOption((opt) => 
     opt 
     .setName("element-no")
     .setDescription("Enter the element number you want to vote for!")
     .setRequired(true)
     .setMinValue(1)
    )
};