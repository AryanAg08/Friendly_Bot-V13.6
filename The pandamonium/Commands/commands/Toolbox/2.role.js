module.exports = {
    commands: ["t2"],
    minArgs: 0,
    callback: async (message) => {
        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const code8 = "gm0008"
        const code9 = "ch0009"
        const code10 = "ko0010"
        const code11 = "Sp0011"
        const code12 = "FR0012"
        const code13 = "EN0013"
        const code14 = "JP0014"
        const code15 = "NW0015"
        const code16 = "FN0016"
        const code17 = "SD0017"
       
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code8)
            .setStyle("PRIMARY")
            .setEmoji("🇩🇪")
            .setLabel("German"),

            new MessageButton()
            .setCustomId(code9)
            .setStyle("PRIMARY")
            .setEmoji("🇨🇳")
            .setLabel("Chinese"),

            new MessageButton()
            .setCustomId(code10)
            .setStyle("PRIMARY")
            .setEmoji("🇰🇷")
            .setLabel("Korean"),

            new MessageButton()
            .setCustomId(code11)
            .setStyle("PRIMARY")
            .setEmoji("🇪🇸")
            .setLabel("Spanish"),
            
            new MessageButton()
            .setCustomId(code12)
            .setStyle("PRIMARY")
            .setEmoji("🇫🇷")
            .setLabel("French"),

        )

        const TRY2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code13)
            .setStyle("PRIMARY")
            .setEmoji("🇬🇧")
            .setLabel("English"),

            new MessageButton()
            .setCustomId(code14)
            .setStyle("PRIMARY")
            .setEmoji("🇯🇵")
            .setLabel("Japanese"),
        
            new MessageButton()
            .setCustomId(code15)
            .setStyle("PRIMARY")
            .setEmoji("🇳🇴")
            .setLabel("Norwegian"),

            new MessageButton()
            .setCustomId(code16)
            .setStyle("PRIMARY")
            .setEmoji("🇫🇮")
            .setLabel("Finnish"),

            new MessageButton()
            .setCustomId(code17)
            .setStyle("PRIMARY")
            .setEmoji("🇸🇪")
            .setLabel("Swedish"),
            )

        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Language Preference")
        .addFields(
            {
                name: `Language Learners:`, value: ` 
                select the options with this message if you're learning or are fluent on one of the languages.
             Remember that if you select with one of these you will most probably get a few pings as people will be looking for peeps who can help them with their questions about it. We will kindly ask you to keep the language talk/answers on DMs as the language of this server is English and so it will be easy to moderate that way. 
             Ask the question in English on  <#701824569308086362>  and you can discuss them on your private messages. 
             
             Mods will delete any post that they feel is breaking the rules, and will ask to repost them in English

             For example:
**"I'm confused on how to use the past perfect tense in @German , is anyone available to help me?"**
                `
            }
        )

        message.channel.send({ components: [TRY, TRY2], embeds: [Embed]});
    },
}

/**🇩🇪  @German 
🇨🇳  @Chinese 
🇰🇷  @Korean 
🇪🇸  @Spanish 
🇫🇷  @French 
🇬🇧  @English
🇯🇵  @Japanese
🇳🇴  @Norwegian
🇫🇮  @Finnish 
🇸🇪  @Swedish 
 */