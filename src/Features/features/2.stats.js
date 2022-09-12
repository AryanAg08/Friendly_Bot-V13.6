module.exports = (client) => {
    client.on("ready", async () => {
        const R1 = require("../../models/3server-registered");
        const S1 = require("../../models/4Stats");
        const schedule = require("node-schedule");

        var j = schedule.scheduleJob("*/1 * * * *", async function () {
            const GG = client.guilds.cache.map(guild => guild.id)
            
            const H1 = await R1.find({
              Stats: "YES",
            })

            for (ss of H1) {
                const Guilds = ss.GuildID

                if (GG.includes(Guilds)) {
                    const guild = client.guilds.cache.get(Guilds)
                    const members = await guild.members.fetch()
                    const botCount = members.filter(member => member.user.bot).size;
                    const MembCount = guild.memberCount;

                    const J1 = await S1.find({
                        GG: Guilds,
                    })

                    for (ff of J1) {
                        
                        const MemCount = ff.MemberCount
                        const Bot = ff.Bots

                        const MCchan = guild.channels.cache.get(MemCount);
                        if (!MCchan) {
                      return  //console.log("channel deleted!!");
                         } else {
                            MCchan.setName(`Member-Count: ${MembCount}`);
                         }
                          const BOTChan = guild.channels.cache.get(Bot);
                          if (!BOTChan) return //console.log("Botchannel deleted!!");
                          else {
                            BOTChan.setName(`Bots: ${botCount}`);
                        }
                    }
                }
            }
        })
    })
}