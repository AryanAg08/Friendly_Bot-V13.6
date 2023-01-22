module.exports = (client) => {
    client.on('ready', async () => {
        const schedule = require("node-schedule");
        const B1 = require("../../models/3server-registered");
        const B2 = require("../../models/10Bday");
        const moment = require("moment");
        let bTd = moment().format("MM")
        let BDD = moment().format("DD")
        const { MessageEmbed } = require("discord.js");

        var j = schedule.scheduleJob("*/1 * * * *", async function() {
            const ff = await B1.find({
                Bday: "YES",
            })
            if (ff) {
                for (hh of ff) {
                     const GGs = hh.GuildID
                     

                     const B3 = await B2.find({
                        GG: GGs,
                        Month: bTd,
                        Day: BDD,
                     })

                     if (B3) {
                         if (B3 && B3.length > 0 ) {
                            let reply = `Birthday's today 🎊\n`
                              
                            for (bbh of B3) {
                                const name = bbh.user
                                const age = bbh.Age
                                
                                const Y1 = await B2.findOneAndUpdate({
                                    GG: GGs,
                                    user: name,
                                },{
                                    Age: age + 1,
                                },{
                                    upsert: true,
                                    new: true,                         
                                   })
                                reply += `<:Arrow:999990883107741726> ${name}`
                            }
    
                            
                            const B4 = await B2.find({
                                GG: GGs,
                                user: "anon",
                            })
                            if (B4) {
                                for (tt of B4) {
                                    const chan = tt.BDChannel
                                    const role = tt.BDRole
                                    const wish = tt.ServerWish

                                    if (chan) {
                                        const checkchan = client.channels.cache.fetch((c) => c.id === chan) || null
                                        
                                        if (!checkchan) return;

                                        const guild = client.guilds.cache.get(GGs);
                                          const Icon = guild.iconURL()
                                         const embed = new MessageEmbed()
                                         .setColor("RANDOM")
                                         .setFooter({
                                            text: `${guild.name}`,
                                            iconURL: Icon
                                         })
                                         .setDescription(reply)
                                       

                                         const channn = client.channels.cache.get(chan);

                                         await channn.send({ embeds: [embed]});

                                         if (role) {
                                           const checkrole = guild.roles.cache.find((r) => {
                                            r.id === role
                                           })

                                           if (!checkrole) return;

                                           else {
                                            const member = guild.member.user.roles.add(role) || null

                                            if (!member) return;
                                           }
                                         } else return;
                                    } else return;
                                }
                            } else return;
                        } else return;
                     } else return;
                }
            } else return;
        }) 
        
        

    })
}