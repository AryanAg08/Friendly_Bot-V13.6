module.exports = (client) => {
    client.on('guildCreate', async (guild) => {

        const Channel = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(guild.me).has("SEND_MESSAGES"));

        const Icon = guild.iconURL()

        const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
        const Try = new MessageEmbed()
            .setColor('RANDOM')
            .setImage('https://c.tenor.com/Z6r2T3rWZNgAAAAj/balloons-confetti.gif')
            .setDescription(` 🎉 Welcome to Friendly_bot! \n Thank you for inviting Friendly_Bot to ${guild.name}! Friendly_Bot keeps track of statistics of your server and help users to maintain their profile and server! \n
                 You can have access to features including the popular ones below!! \n **General Info:** \n • My default prefix is **!**. Type !help for quick list of commands.
                 • You can read all about using Friendly_Bot in the documentation linked below! I hope this welcome guide will help community and team builders. 
                 • For setting up your server please go through the **Setup guide** using *!setup* or */setup* `)
            .setFooter({
                text: "FriendlyBot",
                iconURL: Icon,
            })
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Support')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/tC9zdx2HWM')
                    .setEmoji("🛠")
            )
            .addComponents(
                new MessageButton()
                    .setLabel('Invite-Bot')
                    .setEmoji("974704126443262032")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=836674312969650267&permissions=8&scope=applications.commands%20bot")
            )

        Channel.send({ embeds: [Try], components: [row] });
        const chan = client.channels.cache.get("818732196117348364");
        const member = guild?.memberCount
        chan.send(`New guild added \n> **${guild.name}** \n> **Members: ${member}**`);
    })
}