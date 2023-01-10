module.exports = {
    commands: ["t3"],
    minArgs: 0,
    callback: async (message) => {
        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const code18 = "PY0018"
        const code19 = "SH0019"
        const code20 = "CC0020"
        const code21 = "JA0021"
        const code22 = "CS0022"
        const code23 = "LX0023"
        const code24 = "RY0024"
        const code25 = "JS0025"
        const code26 = "RS0026"
        const code27 = "GO0027"
        const code28 = "DT0028"
        const code29 = "KT0029"
       
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code18)
            .setStyle("PRIMARY")
            .setLabel("Python"),

            new MessageButton()
            .setCustomId(code19)
            .setStyle("PRIMARY")
            .setLabel("Shell (Bash)"),

            new MessageButton()
            .setCustomId(code20)
            .setStyle("PRIMARY")
            .setLabel("C"),

            new MessageButton()
            .setCustomId(code21)
            .setStyle("PRIMARY")
            .setLabel("Java"),
            
            new MessageButton()
            .setCustomId(code22)
            .setStyle("PRIMARY")
            .setLabel("R"),

        )

        const TRY2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code23)
            .setStyle("PRIMARY")
            .setLabel("HTML"),

            new MessageButton()
            .setCustomId(code24)
            .setStyle("PRIMARY")
            .setLabel("CSS"),

            new MessageButton()
            .setCustomId(code25)
            .setStyle("PRIMARY")
            .setLabel("Javascript"),

            new MessageButton()
            .setCustomId(code26)
            .setStyle("PRIMARY")
            .setLabel("Rust"),

            new MessageButton()
            .setCustomId(code27)
            .setStyle("PRIMARY")
            .setLabel("Go"),
        )

        const TRY3 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code28)
            .setStyle("PRIMARY")
            .setLabel("Dart"),

            new MessageButton()
            .setCustomId(code29)
            .setStyle("PRIMARY")
            .setLabel("Kotlin"),
        )

        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Programming Languages")
        .addFields(
            {
                name: `❖ Coders/Developers ❖`, value: ` 
                
As we have a bunch of people who know different programming languages, we'll be adding roles to the most popular ones. Remember that if you select one of these you will most probably get a few pings.  

Feel free to select as many as you want/know the language, as this will be used to ask things about them!`
            }
        )

        message.channel.send({ components: [TRY, TRY2, TRY3], embeds: [Embed]});
    },
}

/**
 * 🌕  @Python 
🌖  @Shell (Bash) 
🌗  @C 
🌘  @Java 
🌑  @R 
🌒  @HTML 
🌓  @CSS 
🌔  @LaTeX 
🌙  @Ruby 
🐙  @JavaScript 
🦀 @Rust 
🦑 @Go 
🐠  @Dart 
🐢 @Kotlin 
 */