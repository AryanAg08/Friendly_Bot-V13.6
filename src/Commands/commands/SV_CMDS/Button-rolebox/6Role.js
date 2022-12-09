 module.exports = {
            commands: ["B6"],
            minArgs: 0,
            permissions: ["MANAGE_CHANNELS"],
            GUILD: ["703937875720273972"],
            callback: async (message) => {
                const code24 = "FG0024"
                const code25 = "WR0026"
                const code26 = "YT0027"
                const code27 = "MD0028"  
                const code28 = "SE0029"   
                const code29 = "BC0030"       
        
                const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
                const TRY = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId(code26)
                    .setLabel("YT-notifications")
                    .setEmoji("📺")
                    .setStyle("PRIMARY"),
                
                   new MessageButton()
                  .setCustomId(code27)
                  .setEmoji("🧘‍♀️")
                  .setLabel("Meditation")
                  .setStyle("PRIMARY"),
        
                  new MessageButton()
                  .setCustomId(code24)
                  .setLabel("Fun & Games")
                  .setStyle("PRIMARY")
                  .setEmoji("✨"),

                  new MessageButton()
                  .setCustomId(code28)
                  .setLabel("Study - Events")
                  .setStyle("PRIMARY")
                  .setEmoji("🎫"),

                  new MessageButton()
                  .setCustomId(code25)
                  .setLabel("Water Reminders")
                  .setStyle("PRIMARY")
                  .setEmoji("🥤"),
                  )
                  
                  const TRY2 = new MessageActionRow()
                  
                  .addComponents(
                    new MessageButton()
                    .setCustomId(code29)
                    .setLabel("Book - Club")
                    .setStyle("PRIMARY")
                    .setEmoji("📖"),
                  )
        
                    const Embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle('Optional channels')
                    .addFields(
                      { name:`Unlock the Toolbox Channels by reacting:`, value: `
                   **Turn notifications on by reacting:**
                   📺\xa0\xa0\xa0\xa0\xa0StudyVibes YT notifications.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                   🧘‍♀\xa0\xa0\xa0\xa0\xa0Notifications for Yoga and Meditation.
                   ✨\xa0\xa0\xa0\xa0\xa0Notifications for Games and Fun.
                   🎫\xa0\xa0\xa0\xa0\xa0Notifications for study Events.
                   🥤\xa0\xa0\xa0\xa0\xa0Notifications for Water Reminders.
                   📖\xa0\xa0\xa0\xa0\xa0Notifications and access to book-club.
                   `}, 
            )
        
                    message.channel.send({components: [TRY, TRY2], embeds: [Embed]});
        
        
                
            }
        }