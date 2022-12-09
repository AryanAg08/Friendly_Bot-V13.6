module.exports = {
    commands: ["B7"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message) => {
        const code30 = "ARABIC"
        const code31 = "DUTCH"
        const code32 = "FRENCH"
        const code33 = "HINDI"
        const code34 = "TURKISH"      

        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code30)
            .setLabel("Arabic")
            .setStyle("PRIMARY"),
        
           new MessageButton()
          .setCustomId(code31)
          .setLabel("Dutch")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code32)
          .setLabel("French")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code33)
          .setLabel("Hindi")
          .setStyle("PRIMARY"),

          new MessageButton()
          .setCustomId(code34)
          .setLabel("Turkish")
          .setStyle("PRIMARY"),
          )

            const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Language channels')
            .addFields(
              { name:`Unlock the Toolbox Channels by reacting:`, value: `
           **Get language channels:**
              1. <#703939843935436872>
              2. <#703939874750726184>
              3. <#703939899148992603>
              4. <#746793392255795220>
              5. <#703940323742580819>
           `}, 
    )

            message.channel.send({components: [TRY], embeds: [Embed]});


        
    }
}