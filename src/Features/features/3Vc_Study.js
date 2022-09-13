module.exports = (client) => {
    client.on("voiceStateUpdate", async (oldMember, newMember) => {
        let oldVoice = oldMember.channelId;
        let newVoice = newMember.channelId;
        const V1 = require("../../models/3server-registered");
        const V2 = require("../../models/14VCStudy");

        const J1 = await V1.find({
            VCStudy: "Enable", 
        })

        if (J1) {
            for (jj of J1) {
                const GGs = jj.GuildID

                const J2 = await V2.find({
                    guildId: GGs,
                    user: "anon",
                })

                if (J2) {
                    for (jk of J2) {
                        const chann = jk.VcChannel1
                        const Msg = jk.VCMSG
                        const TXTChan = jk.TextChannel
                        const RoleId = jk.RoleID
                        const chan = client.channels.cache.get(chann);
                        if (!chan) return;
                        else {
                            
                            if (newVoice === chann) {
                                if (oldVoice != newVoice) {
                                    let userID = oldMember.id
                                    if (RoleId) {
                                        
                                        const guild = client.guilds.cache.get(GGs);
                                        const ROLE = guild.roles.cache.get(RoleId);
                                        if (ROLE) {
                                            guild.members.cache.get(userID).roles.add(RoleId)
                                        }
                                    }
                                    if (TXTChan) {
                                        const Tags = oldMember.member.user.username
                                            const Chann = client.channels.cache.get(TXTChan);
                                            if (Chann) {
                                                if (Msg) {
                                                const member = `<@${oldMember.id}>`
                                               
                                                if (Msg.includes("${member}")) {
                                                    const Final = Msg.replace('${member}', `${member}`)
                                                    Chann.send(Final);
                                                }
                                                if (Msg.includes("${Tag}")) {
                                                    const Final1 = Msg.replace('${Tag}', `${Tags}`)
                                                    Chann.send(Final1);
                                                } 
                                                if (!Msg.includes("${member}") && !Msg.includes("${Tag}")) {
                                                    Chann.send(Msg);
                                                }
                                            } else {
                                                Chann.send(`${Tags} Welcome to the study channel!! Good luck for your session!! 🍀`);
                                            }
                                        } else return;
                                    } else return;
                                    var Join = new Date(Date.now())
                                    const J3 = await V2.findOneAndUpdate({
                                        guildId: GGs,
                                        user: userID,
                                    },{
                                        VCJOIN: Join,
                                    },{
                                        upsert: true,
                                        new: true,
                                    })
                                }
                            }

                            if (oldVoice === chann) {
                                if (oldVoice != newVoice) {
                                    let User = oldMember.id
                                    if (RoleId) {
                                        const guild = client.guilds.cache.get(GGs);
                                        const ROLE = guild.roles.cache.get(RoleId);
                                        if (ROLE) {
                                            guild.members.cache.get(User).roles.remove(RoleId)
                                        }
                                    }
                                    var leave = new Date(Date.now());

                                    const J4 = await V2.find({
                                        guildId: GGs,
                                        user: User,
                                    })
                                    if (J4) {
                                        for (kk of J4) {
                                            const Joining = kk.VCJOIN

                                            const a = new Date(Joining)
                                            const b = new Date(leave)

                                            const GetTime = Math.abs(b.getTime() - a.getTime())
                                              const Min = Math.floor(GetTime / 60000 )
                                              if (isNaN(Min)) return;
                                              if (Min <= 1 ) return;
                                              const J5 = await V2.findOneAndUpdate({
                                                guildId: GGs,
                                                user: User,
                                              },{
                                                user: User,
                                                VCJOIN: "",
                                                $inc: {
                                                    Daily: Min,
                                                    Weekly: Min,
                                                    Monthly: Min,
                                                    ServerTime: Min,
                                                },
                                              },{
                                                upsert: true,
                                                new: true,
                                              });
                                        }                                    
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
        }
    )
}