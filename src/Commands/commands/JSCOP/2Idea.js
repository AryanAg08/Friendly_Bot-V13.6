module.exports = {
    commands: ["I1"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["1088582075763925053"],
   callback: async (message) => {
          const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

          const Embed = new MessageEmbed()
          .setColor("AQUA")
          .setTitle("Idea Submission")
          .setURL("https://docs.google.com/forms/d/e/1FAIpQLSfux1zSSFX8UjhL08CJ3oGI1kzhNBEf6IjSeYDdMieSNg8NNw/viewform")
          .setDescription(`If you have registered on Devfolio, Go ahead Fill out this form of submitting your idea attached to the button below ⬇️`)

          const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setLabel("Click Here")
            .setStyle("LINK")
            .setURL("https://docs.google.com/forms/d/e/1FAIpQLSfux1zSSFX8UjhL08CJ3oGI1kzhNBEf6IjSeYDdMieSNg8NNw/viewform")
          )

          message.channel.send({
            components: [row],
            embeds: [Embed]
          });
   }
}