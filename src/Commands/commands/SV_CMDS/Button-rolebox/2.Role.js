module.exports = {
    commands: ["B2"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code6 = "HE006"
        const code7 = "SH0008"
        const code8 = "TH0009"

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code6)
            .setLabel("He/Him ")
            .setEmoji("♂️")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code7)
          .setEmoji("♀️")
          .setLabel("She/her")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code8)
          .setLabel("They/Them")
          .setStyle("PRIMARY")
          .setEmoji("🙂"),
            )

            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Pronouns preference')
            .addFields(
                {
                    name: `Specify the preferred pronouns by reacting:`, value: `
                ♂\xa0\xa0\xa0\xa0\xa0For He/Him.
                ♀\xa0\xa0\xa0\xa0\xa0For She/Her.
                😄\xa0\xa0\xa0\xa0\xa0For They/Them.
                
                Feel free to choose multiple options, choose a single option or choose none. It is all up to you here! 🤍`},
            )

            message.channel.send({components: [TRY], embeds: [Embed]});


        
    }
}