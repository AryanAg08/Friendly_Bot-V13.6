module.exports = (client) =>  {
    client.on("guildMemberAdd", async member => {
       const Guild = member.guild.id
       const Gname = member.guild.name
       const JoinedTime = member.guild.joinedTimestamp
       const count = member.guild.memberCount
       const Bot = member.user.bot
       const Tag = `${member.user.username}${member.user.discriminator}`
       const Banner = member.user.banner
       const systemChannel = member.guild.systemChannelId
       const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

       const systemChan = client.channels.cache.get(systemChannel);
            if (Bot) return;
       const RG = require("../../models/3server-registered");
       const WS = require("../../models/7welcome");

       const W1 = await RG.find({
        GuildID: Guild,
        welcome: "YES",
       });

       if (W1) {
          const W2 = await WS.find({
            guildID: Guild,
          })

          if (W2) {
                 for (ww of W2) {
                    const Chan = ww.channelID
                    const welcomeDm = ww.WDM
                    const WelcomeMsg = ww.messa
                    const roleID = ww.RRole

                    if (welcomeDm === "YES") {
                        const Row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setDisabled(true)
                            .setCustomId("WLCM")
                            .setLabel(`From server: ${Gname}`)
                            .setStyle("PRIMARY")
                        )

                        const Embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setTimestamp()
                        .setDescription(WelcomeMsg || `Welcome to the **${Gname}**`)
                        .setFooter({
                            text: `<t:${JoinedTime}:F>`
                        })
                        .setThumbnail(member.guild.icon)


                        member.user.send({ embeds: [Embed], components: [Row] });

                        if (roleID) {
                            const checkRole = member.guild.roles.cache.find((r) => {
                                return r.id === roleID
                            }) || null

                            if (!checkRole) return;
                                member.user.roles.add(roleID);
                        }

                        if (Chan) {
                            const checkChannel = member.guild.channels.cache.find((chan) => {
                                return chan.id === Chan
                            }) || null

                            if (!checkChannel) return;
                          
                            const CHANNEL = client.channels.cache.get(Chan);

                            CHANNEL.send(`${Tag} joined ${Gname}. They are ${count}th member of the server!!`);

                        }

                    }
                    if (welcomeDm === "NO") {
                        if (roleID) {
                            const checkRole = member.guild.roles.cache.find((r) => {
                                return r.id === roleID
                            }) || null

                            if (!checkRole) return;
                                member.user.roles.add(roleID);
                        }

                        if (Chan) {
                            const checkChannel = member.guild.channels.cache.find((chan) => {
                                return chan.id === Chan
                            }) || null

                            if (!checkChannel) return;
                          
                            const CHANNEL = client.channels.cache.get(Chan);

                            CHANNEL.send(`${Tag} joined ${Gname}. ${WelcomeMsg} \n\n They are ${count}th member of the server!!`);

                        }
                    }
                 }
          } else return systemChan.send("Welcome Setup is not completed yet!!", `\n ${Tag} Just joind the server!!`);
       } else return;
        
    })
}