const { Make_ONLY_VOICE_Channel, CREATE_BOTH_CHANNELS } = require("../../functions/8Join_To_create");

module.exports = (client) => {
    client.on("voiceStateUpdate", async (oldMember, newMember) => {
          let oldVoice = oldMember.channelId;
          let newVoice = newMember.channelId;
          
          const P1 = require("../../models/3server-registered");
          const P2 = require("../../models/18Private_channels");

          const O1 = await P1.find({
            PrivateChannel: "YES",
          });
          if (O1) {
            for (rr of O1) {
                const GG = rr.GuildID
               
                const O2 = await P2.find({
                  GG: GG,
                  user: "anon",
                })
                if (O2) {
                  
                  for (tt of O2) {
                    const Y1 = tt.Category
                    const V2 = tt.JoinV
                    const V3 = tt.Type

                    const Guild = client.guilds.cache.get(GG);
                   
                    // const checkCat = client.channels.cache.find(chan => chan.type === "GUILD_CATEGORY" && chan.id === Y1)
                    // if (checkCat) {
                      if (newVoice === V2) {
                        if (oldVoice != newVoice) {
                               if (V3 === "VOICE") {
                                console.log("joined channel");
                                const user = oldMember
                                Make_ONLY_VOICE_Channel(user, Guild, Y1);
                               }
                               if (V3 === "BOTH") {
                                const user = oldMember
                                CREATE_BOTH_CHANNELS(user, Guild, Y1);
                               }
                        //}
                      }
                    }
                    
                  }
                }
            }
          }
    });

  client.on("voiceStateUpdate", async (oldMember, newMember) => {
    let oldVoice = oldMember.channelId
    let newVoice = newMember.channelId

    const I1 = require("../../models/3server-registered");
    const T2 = require("../../models/18Private_channels");

    const T3 = await I1.find({
      PrivateChannel: "YES",
    })
    if (T3) {
      for (tt of T3) {
        const GGs = tt.GuildID

        const I2 = await T2.find({
          GG: GGs,
        })
        if (I2) {
          for (pp of I2) {
            const User = pp.user
            const PVVC = pp.VC
            const TCC = pp.TC

            if (User === "anon") return;
            else {
              if (newVoice === PVVC) {
                if (oldVoice != newVoice) {
                  client.channels.cache.get(TCC).permissionOverwrites.edit(oldMember.id, { VIEW_CHANNEL: true, SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true });
                }
              }

              if (oldVoice === PVVC) {
                if (oldVoice != newVoice) {
                  client.channels.cache.get(TEXt).permissionOverwrites.edit(oldMember.id, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
                }
              }
            }
          }
        }
      }
    }
  })
  }

// check the functions Create channels ones they aren't making a new channel;

