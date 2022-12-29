const { Make_ONLY_VOICE_Channel, CREATE_BOTH_CHANNELS } = require("../../functions/8Join_To_create");

module.exports = (client) => {
    client.on("voiceStateUpdate", async (oldMember, newMember) => {
          let oldVoice = oldMember.channelId;
          let newVoice = newMember.channelId;
          
          const P1 = require("../../models/3server-registered");
          const P2 = require("../../models/14VCStudy");

          const O1 = await P1.find({
            PrivateChannel: "YES",
          });
          if (O1) {
            for (rr of O1) {
                const GG = rr.GuildID

                const O2 = await P2.find({
                  GG,
                  user: "anon",
                })

                if (O2) {
                  for (tt of O2) {
                    const Y1 = tt.Category
                    const V2 = tt.JoinV
                    const V3 = tt.Type

                    const Guild = client.guilds.cache.get(GG);
                    
                    const checkCat = client.channels.cache.fetch(chan => chan.type === "GUILD_CATEGORY" && chan.id === Y1)
                    if (checkCat) {
                      if (oldVoice === V2) {
                        if (oldVoice != newVoice) {
                               if (V3 === "VOICE") {
                                const user = oldMember
                                Make_ONLY_VOICE_Channel(user, Guild);
                               }
                               if (V3 === "BOTH") {
                                const user = oldMember
                                CREATE_BOTH_CHANNELS(user, Guild);
                               }
                        }
                      }
                    }
                    
                  }
                }
            }
          }
    });
}