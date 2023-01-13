const A1 = require("../../models/3server-registered");
const B1 = require("../../models/23Security");

module.exports = (client) => {
    const isInvite = async (guild, code) => {
        return await new Promise((resolve) => {
            guild.invites.fetch()
                .then((invites) => {
                    for (const invite of invites) {
                        if (code === invite[0]) {
                            resolve(true)
                            return
                        }
                    }

                    resolve(false)
                })
        })
    }

    client.on('interactionCreate', async (interaction) => {
     
        if (interaction.isSelectMenu()) {
            await interaction.deferUpdate();
            const value = interaction.values;
            const guild = interaction.guild;

            //Codes for usage
            const code1 = "INVITELINKS"
            const code2 = "WORDSPING"
            const code3 = "EVERYONEPING"

            if (value.includes(code1)) {
               const A2 = await A1.findOneAndUpdate({
                GuildID: guild.id,
               },{
                GuildID: guild.id,
                Security: "YES",
               },{
                upsert: true,
                new: true,
               });
               
               const B2 = await B1.findOneAndUpdate({
                GG: guild.id,
                user: "anon",
               },{
                user: "anon",
                InviteLinks: "YES",
                LogChannel: guild.systemChannelId,
               },{
                upsert: true,
                new: true,
               });

               await interaction.channel.send("Added Protection against spam Invite Links!!");
            }

            if (value.includes(code2)) {
                const A3 = await A1.findOneAndUpdate({
                    GuildID: guild.id,
                   },{
                    GuildID: guild.id,
                    Security: "YES",
                   },{
                    upsert: true,
                    new: true,
                   });

                   const B3 = await B1.findOneAndUpdate({
                    GG: guild.id,
                    user: "anon",
                   },{
                    user: "anon",
                    BadWords: "YES",
                    LogChannel: guild.systemChannelId,
                   },{
                    upsert: true,
                    new: true,
                   });  

                   await interaction.channel.send("Added security against wrong words!! \n To check words that are considered bad use /spam wordlist");
            }

            if (value.includes(code3)) {
                const A4 = await A1.findOneAndUpdate({
                    GuildID: guild.id,
                   },{
                    GuildID: guild.id,
                    Security: "YES",
                   },{
                    upsert: true,
                    new: true,
                   });

                   const B4 = await B1.findOneAndUpdate({
                    GG: guild.id,
                    user: "anon",
                   },{
                    user: "anon",
                    EveryonePing: "YES",
                    LogChannel: guild.systemChannelId,
                   },{
                    upsert: true,
                    new: true,
                   });  

                   await interaction.channel.send("Enabled security against @ everyone spams!! \n **NOTE: ONLY MEMBERS HAVING BAN_MEMBERS PERMISSIONS WILL BE ALLOWED TO USE THE EVERYONE PING!!**");
            }
        }
    });

    client.on("messageCreate", async (message) => {
      if (message.channel.type === "DM") return;
      else {
        const {
            member,
            content,
            guild,
            channel,
         } = message;
         const word =  content.toLowerCase()
         const { Permissions }  = require("discord.js");
         const swear = require("../../utils/3words.json");
         const LogChannel = guild.channels.cache.get(guild.systemChannelId);

         const A5 = await A1.find({
            GuildID: guild.id,
            Security: "YES",
         })

         if (A5) {
            const B5 = await B1.find({
                GG: guild.id,
                user: "anon",
            })

            if (B5) {
                for (ww of B5) {
                    const Words = ww.BadWords
                    const Ping = ww.EveryonePing
                    const Invite = ww.InviteLinks
                    
                    if (Words === "YES") {
                        console.log("Words module!!");
                         for (var i = 0; i > swear.length; i++ ) {
                            console.log("Wordss")
                            if (content.includes(swear) || word.includes(swear)) {
                                console.log("HEll yeah!!");
                                message.delete();
                                const K1 = await B1.findOneAndUpdate({
                                    GG: guild.id,
                                    user: member.id,
                                },{
                                    user: member.id,
                                    $inc: {
                                        Count: 1,
                                    },
                                },{
                                    upsert: true,
                                    new: true,
                                })
                                .exec();

                                message.channel.send(`<@${member.id}> please don't use abusive words in chat!!`);
                               
                                const K2 = await B1.find({
                                    GG: guild.id,
                                    user: member.id,
                                })
                                for (rr of K2) {
                                    await LogChannel.send(`<@${member.id}> was using abusive words in <#${channel.id}> This is their **${rr.Count}**`);
                                }  
                            }
                         }
                    }

                    if (Ping === "YES") {
                        if (content.includes("@everyone") || word.includes("@everyone")) {
                            if (member.permissions.has(Permissions.FLAGS.BAN_MEMBERS) || member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return;
                            else {
                                message.delete()
                                const K3 = await B1.findOneAndUpdate({
                                    GG: guild.id,
                                    user: member.id,
                                },{
                                    user: member.id,
                                    $inc: {
                                        Count: 1,
                                    },
                                },{
                                    upsert: true,
                                    new: true,
                                })
                                .exec();

                                message.channel.send(`<@${member.id}> please don't spam everyone ping in chat!!`);
                               
                                const K4 = await B1.find({
                                    GG: guild.id,
                                    user: member.id,
                                })
                                for (rr of K4) {    
                                    await LogChannel.send(`<@${member.id}> was using everyone ping in <#${channel.id}> This is their **${rr.Count}**`);
                                } 
                            }
                        }
                    }

                    if (Invite === "YES") {
                        const code = content.split('discord.gg/')[1]
               
                   if (content.includes(`discord.gg/${guild.name}`)) {
                       return
                          }
                 if (content.includes('discord.gg/')) {

                    const isOurInvite = await isInvite(guild, code)
                    if (!isOurInvite) {
                        message.channel.send(`Please don't advertise any server here.`)
                        message.delete()
                        const K5 = await B1.findOneAndUpdate({
                            GG: guild.id,
                            user: member.id,
                        },{
                            user: member.id,
                            $inc: {
                                Count: 1,
                            },
                        },{
                            upsert: true,
                            new: true,
                        })
                        .exec();
                       
                        const K6 = await B1.find({
                            GG: guild.id,
                            user: member.id,
                        })
                        for (rr of K6) {
                            await LogChannel.send(`<@${member.id}> was using everyone ping in <#${channel.id}> This is their **${rr.Count}**`);
                        } 
                        LogChannel.send(`\n> by <@${member.id}> \n> code: ${code}`);
                    }
                }
                    }
 
                }
            }
         }

      }
    })
}