const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bookmark")
    .setDescription("Sends the particular message to the dms.")
    .addNumberOption((optn) => 
      optn
      .setName("messageid")
      .setDescription("Message Id of the message!!")
      .setRequired(true)
    )
}