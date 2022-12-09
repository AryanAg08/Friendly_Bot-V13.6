module.exports = {
    commands: ["B1"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code1 = "HS0001"
        const code2 = "BL0002"
        const code3 = "MS0003"
        const code4 = "PH0004"
        const code5 = "WK0005"

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code1)
            .setLabel("High School")
            .setEmoji("🏫")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code2)
          .setEmoji("👩‍💻")
          .setLabel("Bachelor")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code3)
          .setLabel("Master")
          .setStyle("PRIMARY")
          .setEmoji("🎓"),

          new MessageButton()
          .setCustomId(code4)
          .setEmoji("👨‍🎓")
          .setStyle("PRIMARY")
          .setLabel("PhD"),

          new MessageButton()
          .setCustomId(code5)
          .setEmoji("💼")
          .setLabel("Working")
          .setStyle("PRIMARY"),
            )

            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Level of Education')
            .addFields(
                { name:`Get your Education role by reacting:`, value: `
                🏫\xa0\xa0\xa0\xa0\xa0If you currently are in **High-school** or an equivalent.
                👨‍💻\xa0\xa0\xa0\xa0\xa0If you are currently doing a **Bachelor** or an equivalent.
                🎩\xa0\xa0\xa0\xa0\xa0If you are currently doing a **Master** or an equivalent.
                👨‍🎓\xa0\xa0\xa0\xa0\xa0If you are currently doing a **PhD or a Specialization**.
                💼\xa0\xa0\xa0\xa0\xa0If you are currently **working**.
                
                Feel free to get the roles of the education level you are currently in or are planning to start soon.`},
            )

            message.channel.send({components: [TRY], embeds: [Embed]});


        
    }
}