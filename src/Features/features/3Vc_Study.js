const { AddTime } = require("../../functions/10StudyVC");
const { CountMembers } = require("../../functions/15VCC");

module.exports = (client) => {
    client.on("voiceStateUpdate", async (oldMember, newMember) => {
        let oldVoice = oldMember.channelId;
        let newVoice = newMember.channelId;
        const V1 = require("../../models/3server-registered");
        const V2 = require("../../models/14VCStudy");
        const Z1 = require("../../models/26study-Sessions");
        const X1 = require("../../models/29sv-session");
        const ms = require("ms");
        const moment = require("moment");


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
                        const guild = client.guilds.cache.get(GGs);
                        const chan = client.channels.cache.get(chann);
                        if (!chan) return;
                        else {
                            
                            if (newVoice === chann) {
                                if (oldVoice != newVoice) {
                                  const Count =  CountMembers(client, GGs, chann);
                                    let userID = oldMember.id

                                    if (GGs === "703937875720273972") {
                                        guild.members.cache.get(oldMember.id).roles.add("1107028201315762286");
                                        const Time = new Date().getTime();
                                        const X2  = await X1.findOneAndUpdate({
                                            user: oldMember.id,
                                        },{
                                            user: oldMember.id,
                                            Joined: Time,
                                        },{
                                            upsert: true,
                                            new: true,
                                        })
                                        console.log(X2);
                                    }
                                    if (RoleId) {
                                        
                                        
                                        const ROLE = guild.roles.cache.get(RoleId);
                                        if (ROLE) {
                                            guild.members.cache.get(userID).roles.add(RoleId)
                                        }
                                    }
                                    if (TXTChan) {
                                              
                                        if (Count === 1) {
                                            const Time = ms("60m");
                                            let starttime = new Date(Date.now());
                                            let endtime = new Date(starttime.getTime() + Time);
                                            let structure = moment(endtime).format("DD/MM/YYYY-hh:mm:ss")
                                            

                                            const channel = client.channels.cache.get(chann);
                                            const myArray = [];
                                            channel.members.each(member => {
                                                myArray.push(`<@${member.user.id}>`) // Pull the username and ID
                                            });


                                            const { MessageEmbed } = require("discord.js");

                                            const desc = `Ongoing Session:\nCurrent Participants👯: ${Count} \n **MEMBERS: **\n${myArray.join("\n") } `
                                            const embed = new MessageEmbed()
                                            .setColor("RANDOM")
                                            .setFooter({
                                                text: `-By Friendly_Bot`
                                            })
                                            .setDescription(desc)

                                            const IID = channel.send({ 
                                                embeds: [embed],
                                            });

                                            const EmbeedID = IID.id
                                            const name = channel.name

                                            const S1 = await Z1.findOneAndUpdate({
                                                GG: GGs,
                                                user: "anon",
                                            },{
                                                PersonCount: Count,
                                                CurrentSes: structure,
                                                BreakSize: "10m",
                                                TimerSize: "60m",
                                                $push: {
                                                    MergeUsers: myArray,
                                                },
                                                TimerEmbedId: EmbeedID,
                                                channelOriginalName: name,
                                            },{
                                                upsert: true,
                                                new: true,
                                            });
                                            console.log(S1);
                                        }



                                        const Tags = oldMember.member.user.username
                                            const Chann = client.channels.cache.get(TXTChan);
                                            if (Chann) {
                                                if (Msg) {
                                                const member = `<@${oldMember.id}>`
                                               
                                                if (Msg.includes("${user}")) {
                                                    const Final = Msg.replace('${user}', `${member}`)
                                                    Chann.send(Final    );
                                                }
                                                if (Msg.includes("${Tag}")) {
                                                    const Final1 = Msg.replace('${Tag}', `${Tags}`)
                                                    Chann.send(Final1);
                                                } 
                                                else if (!Msg.includes("${user}") && !Msg.includes("${Tag}")) {
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

                                    if (GGs === "703937875720273972") {
                                        guild.members.cache.get(oldMember.id).roles.remove("1107028201315762286");
                                        const Time2 = new Date().getTime();

                                        const X3 = await X1.find({
                                            user: oldMember.id
                                        });

                                        if (X3) {
                                            const Time1 = X3.Joined;

                                            const Dif = Time2 - Time1;

                                            var hours = Math.floor(Dif/1000/60/60);

                                            const X4 = await X1.findOneAndUpdate({
                                                user: oldMember.id,
                                            },{
                                                $inc: {
                                                    timestamp: hours,
                                                }
                                            },{
                                                upsert: true,
                                                new: true,
                                            });
                                            console.log(X4);
                                        }
                                    } 
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
                                                VCJOIN: " ",
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
    );

client.on("ready", async () => {
        const Schedule = require("node-schedule");
        const O1 = require("../../models/3server-registered");
        const O2 = require("../../models/14VCStudy");
        const L1 = require("../../models/29sv-session");
        var j = Schedule.scheduleJob("*/6 * * * *", async function () {
           const T1 = await O1.find({
                 VCStudy: "Enable", 
           })    

           if (T1) {
            for (kk of T1) {
                const GuildId = kk.GuildID

                const L2 = await O2.find({
                    guildId: GuildId,
                    user: "anon",    
                })
                if (L2) {
                    for (oo of L2) {

                       if (GuildId === "703937875720273972") {
                        const IDD = "1107028201315762286";
                        const GID = client.guilds.cache.get("703937875720273972");
                        try {
                            const RRole = GID.roles.cache.get(IDD);

                            RRole.members.map(async m => {
                                const UUSER = m.user.id;

                                const L2  = await L1.findOneAndUpdate({
                                    user: UUSER,
                                },{
                                    user: UUSER,
                                    $inc: {
                                        Time: 0.1,
                                    }
                                },{
                                    upsert: true,
                                    new: true,
                                });
                                console.log(L2);
                            })
                        } 
                        catch (err) {
                            console.log(err);   
                        }
                       }


                        const RoleId = oo.RoleID
                        if (RoleId != undefined) { 
                        const GG = client.guilds.cache.get(GuildId)
                        try {
                        const Role = GG.roles.cache.find((role) => role.id === RoleId)
                        if (Role) {
                            try {
                                Role.members.map(m => {
                                    const user = m.user.id;
                                    const B = AddTime(user, GuildId);
                                });
                            } 
                            catch (err) {
                                console.log(err);
                            }
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
                }
                }

            }
           }
        })
    })
}
