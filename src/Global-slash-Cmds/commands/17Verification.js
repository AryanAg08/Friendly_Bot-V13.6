const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verification')
    .setDescription('Set verification for your server!!')
    .addStringOption((option) => 
    option
    .setName('level')
    .setDescription("Set verification level for your server!!")
    .setRequired(true)
    .addChoices({
        name: "Easy",
        value: "easy"
    },
    {
        name: "Medium",
        value: "medium"
    },
    {
        name: "Hard", 
        value: "hard"
    }
       ) 
    )
    .addRoleOption((option) => 
        option
        .setName('setverifiedrole')
        .setDescription(`Set a verified role!!`)
        .setRequired(true)
        )
        
        .addChannelOption((option) => 
        option
        .setName('setverificationchannel')
        .setDescription("Set a channel where verified message goes")
        .setRequired(false)
        )
}