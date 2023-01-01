const { help1, help2 } = require("../../functions/4Buttons");

module.exports = (client) => {

    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;

        else {
            

            if (interaction.customId === "HPx001") {
                help1(interaction);
            }

            if (interaction.customId === "HPx002") {
               help2(interaction);
            }


         
            const Guild = interaction.guild.id
            const BID = interaction.customId;
            const userId = interaction.user.id;
               if (BID === `PVC${userId}`) {
                console.log(`Working!! `)
               
            const L1 = require("../../models/18Private_channels");

            const L2 = await L1.find({
                GG: Guild,
                user: userId,
            })

            if (L2) {
                for (ff of L2) {
                    const VCC = ff.VC
                    const type = ff.Type
                    const TCC = ff.TC

                    if (type === "BOTH") {
                       const vchan = interaction.guild.channels.cache.get(VCC);
                       const tchan = interaction.guild.channels.cache.get(TCC);

                       if (vchan) {
                        vchan.delete();
                       }
                       if (tchan) {
                        tchan.delete();
                       }
                    }
                }
            } else return;
        }
    }
    })
}