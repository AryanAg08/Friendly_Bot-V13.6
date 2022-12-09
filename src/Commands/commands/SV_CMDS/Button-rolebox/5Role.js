module.exports = {
    commands: ["B5"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code19 = "CS0019"
        const code20 = "FS0020"
        const code21 = "PS0021"
        const code22 = "SL0022"
        const code23 = "SN0023"
        

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code19)
            .setLabel("Coffee shop - Relax Study")
            .setEmoji("☕")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code20)
          .setEmoji("🌱")
          .setLabel("Forest - Sessions")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code21)
          .setLabel("Pom - Sessions")
          .setStyle("PRIMARY")
          .setEmoji("🍅"),

          new MessageButton()
          .setCustomId(code22)
          .setEmoji("📚")
          .setStyle("PRIMARY")
          .setLabel("Study Logs (for Studyhall)"),

          new MessageButton()
          .setCustomId(code23)
          .setEmoji("📅")
          .setLabel("Week Study Challenge")
          .setStyle("PRIMARY"),
            )

            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Level of Education')
            .addFields(
                { name:`Get your Study role by reacting:`, value: `
                ☕️\xa0\xa0\xa0\xa0\xa0**To join the Coffee Club**
                _The Coffee Club is the perfect laid back place, just sit back with a cup of coffee (or tea) and crack on studying._
                🌱\xa0\xa0\xa0\xa0\xa0To Join Forest Sessions.
                🍅\xa0\xa0\xa0\xa0\xa0For Pomodoro Sesions.
                📚\xa0\xa0\xa0\xa0\xa0For study Logs of <#860931349993357372>.
                📅\xa0\xa0\xa0\xa0\xa0For To-do in <#912030213074993182>.
                
                Feel free to get the roles you want for study sessions.`},
            )

            message.channel.send({components: [TRY], embeds: [Embed]});


        
    }
}