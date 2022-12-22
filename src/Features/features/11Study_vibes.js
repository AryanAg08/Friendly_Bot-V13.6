module.exports = (client) => {

    client.on("ready", async () => {
        const schedule = require("node-schedule");

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            const guild = client.guilds.cache.get('703937875720273972');
            const voiceChannels = await guild.channels.cache.filter(c => c.type === 'GUILD_VOICE');
            let count = 0;

            for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
            
            const channelId = "886948093566808095";

            const AA = await guild.channels.cache.get(channelId);
            AA.setName(`Currently Studying: ${count}`);
            
            let memberCount;
            memberCount = guild.roles.cache.get("707547622591692911").members.size;
            const channelID = "862013407225053244"
            const channel = guild.channels.cache.get(channelID)
            const CC = memberCount / 1000 
            const NN = Math.round(CC * 100) / 100
            channel.setName(`Verified: ${NN}k`)
            

        });

    });

    client.on("ready", async () => {
        const N1 = require("../../models/19Christmas_Package");
        const channels = [
            "751540126311645335", //counting 
            "797635013012881438", //thoughts
            "749608840839954443", // bot_cmds
            "860378312894447616", // looking-for-study-grps
            "829478397502947388", // Achivements
            "708939490953265202", // goal
            "732292791287283862", // timer
            "860379695845474334", // non-english
            "703937876634894388", // english
            "780031581771268116", // boosters
            "729372656456958022", // suggestions
            "709401681460330527" // intro
        ];
        const Candies = [
            "13",
            "20",
            "10",
            "5",
            "2",
            "7",
            "8",
            "12"
        ];

        const MSG = "type **!claim candies**";
        const schedule = require("node-schedule");
        const ms = require("ms");
        const moment = require("moment");
         
        var j = schedule.scheduleJob("*/10 * * * *", async function () {
           
            const random = Math.floor(Math.random()*channels.length);
            const ChanArr = channels[random]
            const chan = client.channels.cache.get(ChanArr);
            const GG = "703937875720273972";
            const user = "anon";
            const IsStillActive = "YES";
            const Timer = ms("4m");
            let starttime = new Date(Date.now());
            let endtime = new Date(starttime.getTime() + Timer);
            let Time = moment(endtime).format("DD/MM/YYYY-HH:mm");
           const CandiesCount = Math.floor(Math.random()*Candies.length);
           const AddCandies = Candies[CandiesCount];
           const MGG = await chan.send(MSG);
           const MsgID = MGG.id;
           const C1 = await N1.findOneAndUpdate({
            GG,
            user,
           },{
            user,
            IsStillActive,
            AddCandies,
            Time,
            MsgID,
            ChannelID: ChanArr,
           },{
            upsert: true,
            new: true,
           });
           console.log(C1);
        });

        var k = schedule.scheduleJob("*/1 * * * *", async function () {
            const L1 = await N1.find({
                GG: "703937875720273972",
                user: "anon",
                IsStillActive: "YES",
            })
            if (L1) {
                for (ll of L1) {
                    // Do the same as timer feature//
                    const Time = ll.Time
                    const Msg = ll.MsgID
                    const Channel = ll.ChannelID

                    const current = new Date(Date.now());
                    const moment = require("moment");
                    const TimMe = moment(current).format("DD/MM/YYYY-HH:mm");

                    if (Time === TimMe) {
                        client.channels.fetch(Channel).then(channel => {
                            channel.messages.delete(Msg);
                        });
                        const K2 = await N1.findOneAndUpdate({
                            GG: "703937875720273972",
                            user: "anon",
                            
                        },{
                            IsStillActive: "NO",
                            MsgID: "anon",
                        },{
                            upsert: true,
                        });
                        console.log(K2);
                    }
                }
            }
        })
    });

    client.on("MessageCreate", async message => {
        const {guild, author, content, channel} = message;
        const cont = "!claim candies";
        const M1 = require("../../models/19Christmas_Package");
        const K1 = require("../../models/20Candies");
       if (guild.id === "703937875720273972") {
        const M2 = await M1.find({
            GG: guild.id,
            user: "anon",
            IsStillActive: "YES",
        })
        for (rr of M2) {
          const Chan = rr.ChannelID;
          const CandiesCount = rr.AddCandies
        

          if (channel.id === Chan) {
                 if (content === cont) {
                     const T1 = await K1.findOneAndUpdate({
                        GGuild: guild.id,
                        user: author.id,
                     },{
                        user: author.id,
                        $inc: {
                            candies: CandiesCount,
                        },
                     },{
                        upsert: true,
                        new: true,
                     });
                     message.delete();
                     console.log(T1);
                     message.reply("text")
                     .then(repliedMessage => {
                     setTimeout(() => repliedMessage.delete(), 5000);
                      })
                      .catch();
                 }
          }
        }
       }
    });
}