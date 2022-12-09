module.exports = {
    commands: ["B8"],
    minArgs: 0, 
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code35 = "VS0001"
        const { MessageActionRow, MessageButton, MessageEmbed  } = require("discord.js");

        const row = new MessageActionRow() 
        .addComponents(
            new MessageButton()
            .setCustomId(code35)
            .setLabel("Vincent Studz")
            .setStyle("PRIMARY"),
        )

        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Co-working Streams notifications:')
        .setFields(
            { name: `Click the respective streamer you want to follow:`, value: `
            **Streamers List** 
            1. Vincent Studz`},
        )

        message.channel.send({components: [row], embeds: [Embed]});
    }
}