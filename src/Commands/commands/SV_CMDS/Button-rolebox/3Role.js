module.exports = {
    commands: ["B3"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code9 = "AC0009" // Africa 
        const code10 = "AS0010" // Asia
        const code11 = "AA0011" // Australia
        const code12 = "EP0012" // Europe 
        const code13 = "NA0013" // NA
        const code14 = "SA0014" // SA
        const CODE15 = "ANT0015" // Antartica

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code9)
            .setLabel("Africa")
            .setEmoji("🌗")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code10)
          .setEmoji("🌑")
          .setLabel("Asia")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code11)
          .setLabel("Australia")
          .setStyle("PRIMARY")
          .setEmoji("🌒"),

          new MessageButton()
          .setCustomId(code12)
          .setEmoji("🌓")
          .setStyle("PRIMARY")
          .setLabel("Europe"),
            )
       const TRY1 = new MessageActionRow()
       .addComponents(
        new MessageButton()
        .setCustomId(CODE15)
        .setEmoji("❄")
        .setLabel("Antartica")
        .setStyle("PRIMARY"),
       
        new MessageButton()
        .setCustomId(code13)
        .setEmoji("🌔")
        .setLabel("North-America")
        .setStyle("PRIMARY"),

        new MessageButton()
        .setCustomId(code14)
        .setEmoji("🌕")
        .setLabel("South-America")
        .setStyle("PRIMARY"),
        )
            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Continents')
            .addFields(
                { name:`Specify where on earth you are by reacting:`, value: `
                🌗\xa0\xa0\xa0\xa0\xa0For Africa.
                🌑\xa0\xa0\xa0\xa0\xa0For Asia.
                🌒\xa0\xa0\xa0\xa0\xa0For Australia.
                🌓\xa0\xa0\xa0\xa0\xa0For Europe.
                🌔\xa0\xa0\xa0\xa0\xa0For North-America.
                🌕\xa0\xa0\xa0\xa0\xa0For South-America.
                ❄\xa0\xa0\xa0\xa0\xa0For Antartica.
                
                Feel free to choose which continent best represents your location and give others an idea whenever you might be online and when not to disturb. Of course it's always fine if you do not want to share this information!`},
            )

            message.channel.send({components: [TRY, TRY1], embeds: [Embed]});


        
    }
}