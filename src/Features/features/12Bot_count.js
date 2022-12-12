const J1 = require("../../models/3server-registered");
const J2 = require("../../models/17Bot-counting");

module.exports = (client) => {

    client.on('messageCreate', async (message) => {
        if (message.author.bot) return;
         const GG = message.guild.id;
         const user = message.author.id;

        const Z1 = await J1.find({
            GuildID: GG,
            BotCount: "YES",
        })
        if (Z1) {
            const Z2 = await J2.find({
                GG,
                user: "anon",
            })
            if (Z2) {
                for (zz of Z2) {
                    const Channe= zz.CHAN
                    const goodies = zz.Goodies

                    const JJ = client.channels.cache.get(Channe)
                    if (JJ) {
                        if (message.channel.id === `${Channe}`) {
                            const A = message.content

                            if (isNaN(A)) return console.log("Not A Number");

                            const Mathsss = Math.round(A * 10) /10;

                            const Z3 = await J2.find({
                                GG,
                                user: "anon",
                            })

                            for (xx of Z3) {
                                const Current_Count = xx.CurrentCount
                                const Next_Count = xx.NextCount
                                const score = xx.Score
                                const Last_User = xx.LastCountUser
                                console.log(`Count: ` + Next_Count + Current_Count);

                                if (Last_User === user) {
                                    message.react("❌")
                                    message.channel.send(`Ruined it at ${Next_Count}!! \n You cannot count in a row!! \n Try again from **1**`);
                                    const Z4 = await J2.findOneAndUpdate({
                                        GG,
                                        user: "anon",
                                    },{
                                        user: "anon",
                                        CurrentCount: 0,
                                        NextCount: 1,
                                        LastCountUser: "anon",
                                        },{
                                            upsert: true,
                                            new: true,
                                        })
                                        console.log(Z4);
                                } else {
                                    if (Mathsss === Next_Count) {
                                        message.react("✅");
                                        const Z5 = await J2.findOneAndUpdate({
                                            GG,
                                            user: "anon",
                                        },{
                                            user: "anon",
                                            LastCountUser: user,
                                            $inc: {
                                                CurrentCount: 1,
                                                NextCount: 1,
                                                Score: 2,
                                            },
                                        },{
                                            upsert: true,
                                            new: true,
                                        })
                                        .exec()

                                        console.log(Z5);

                                        if (Mathsss === 100) {
                                            message.react("💯");
                                            message.reply(`Well done you have earned a Star-Point for you!! ✨`);
                                            const Z6 = await J2.findOneAndUpdate({
                                                GG,
                                                user,
                                            },{
                                                user,
                                                $inc: {
                                                    StarPoint: 1,
                                                },
                                            },{
                                                upsert: true,
                                                new: true,
                                            })
                                            console.log(Z6);
                                        }

                                        if (Mathsss === 51 || Mathsss === 190 || Mathsss === 121 || Mathsss === 202 || Mathsss === 405) {
                                            message.react("🎁");
                                            message.reply("oops!! you found an anon gift!! Adding a Star-point for you!! \n To check your starpoints use !points in <#749608840839954443>");
                                            const f2 = await J2.findOneAndUpdate({
                                                GG,
                                                user,
                                            }, {
                                                user,
                                                $inc: {
                                                    StarPoint: 1,
                                                },
                                            }, {
                                                upsert: true,
                                                new: true,
                                            })
                                            console.log(f2);
                                        }
                                    } else {
                                        message.react("❌");
                                        const d1 = await J2.find({
                                            GG,
                                            user,
                                        })

                                        for (ww of d1) {
                                            if (ww.StarPoint) {
                                                
                                                message.channel.send(`Wrong Number!! Using your starpoint!! ✨`);

                                                const d2 = await J2.findOneAndUpdate({
                                                    GG,
                                                    user,
                                                },{
                                                    user,
                                                    $inc: {
                                                        StarPoint: -1,
                                                    },
                                                },{
                                                    upsert: true,
                                                    new: true,
                                                });
                                                console.log(d2);
                                            } else {
                                                message.channel.send(`Ruined it at ${Current_Count}!! \n Start again From **1**!!`);
                                                const d3 = await J2.findOneAndUpdate({
                                                    GG,
                                                    user: "anon",
                                                },{
                                                    user: "anon",
                                                    CurrentCount: 0,
                                                    NextCount: 1,
                                                    LastCountUser: "anon",
                                                },{
                                                    upsert: true,
                                                    new: true,
                                                })
                                                console.log(d3);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else return console.log("Channel doesn't exists!!");
                }
            } else return;
        } else return;
    })
}