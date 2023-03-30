module.exports = (client) => {
    client.on("messageCreate", async message => {
        if (message.content === "!EMBED") {
            const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
           
        
                        const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId(`Team`)
                            .setLabel('Join-A-Team')
                            .setStyle(ButtonStyle.Success),
                    
                           );
        
                        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('JOIN-A-TEAM')
            .setDescription(`If you registered as a single member. And want us to put you in a team. React down below to let our mods know and you will be alloted a team.`)
                   .setTimestamp()
        
              message.channel.send({ embeds: [exampleEmbed], components: [row] });
        
        }
    })
}