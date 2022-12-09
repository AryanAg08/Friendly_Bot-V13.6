module.exports = {
    commands: ["B4"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code15 = "3T0015"
        const code16 = "6T0016"
        const code17 = "8T0017"

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code15)
            .setLabel("30 - 60 min Tree")
            .setEmoji("🌺")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code16)
          .setEmoji("🌳")
          .setLabel("60 - 120 min Tree")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code17)
          .setLabel("120 - 180 min Tree")
          .setStyle("PRIMARY")
          .setEmoji("🌴"),

            )

            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Forest tree length preference')
            .addFields(
                { name:`Specify the preferred Forest tree length by reacting:`, value: `
                🌺\xa0\xa0\xa0\xa0\xa030 - 60 min tree.
                🌳\xa0\xa0\xa0\xa0\xa060 - 120 min tree.
                🌴\xa0\xa0\xa0\xa0\xa0120 - 180 min tree.
                
                Feel free to choose multiple options, choose a single option or choose none. It is all up to you here!`},
            )

            message.channel.send({components: [TRY], embeds: [Embed]});


        
    }
}