const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("wish")
    .setDescription("Send your christmas wishing to the other user!! Only for Study Vibes Server!!")
    .addUserOption((option) => 
    option
    .setName("username")
    .setDescription("Name of the user you want to send this msg!!")
    .setRequired(true)
    )
    .addStringOption((optn) => 
    optn
    .setName('gifttype')
    .setRequired(true)
    .setDescription("select the type of gift you want to send!!")
    .addChoices(
        {
            name: "Gifts🎁",
            value: "GIFT"
        },
        {
            name: "Elves🦌",
            value: "ELVES"
        },
        {
            name: "Tree🎄",
            value: "TREE"
        },
        {
            name: "Santa🎅",
            value: "SANTA"
        }
    )
    )
    .addStringOption((optn) => 
    optn
    .setName("message")
    .setDescription("Your wishing for the user!!")
    .setRequired(true)
    )
}