const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('privatevoicechannel')
    .setDescription(`Setup private join to create voice channels!!`)
    .addStringOption((optn) => 
    optn
    .setName("type")
    .setDescription("Set the type of channel you want voice/text/both")
    .setRequired(true)
    .addChoices({
        name: "Voice",
        value: "VOICE",
    },{
        name: "Both",
        value: "BOTH",
    })
    )
    .addChannelOption((optn) => 
    optn
    .setName('category')
    .setDescription('Set a category which you want to make Join-to-create voice channels!!')
    .setRequired(false)
    )
}