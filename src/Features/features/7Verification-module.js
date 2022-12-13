module.exports  = (client) => {
    const v1 = require("../../models/3server-registered");
    const v2 = require("../../models/15Verification");

    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;
        
    const b1 = await v1.find({
        Verification: "YES",
    })

    for (qq of b1) {
        const gg = qq.GuildID

        const b2 = await v2.find({
            GG: gg,
            VerificationLevel: "EASY",
            user: "anon",
        })

        if (b2) {
            for (cc of b2) {
                const role = cc.VerificationRole

                if (interaction.customId === `Verification${gg}`) {

                    const member = interaction.member;
                    member.roles.add(role);
                    interaction.reply({
                        content: `<@${member.id}> you have been verified ✅ `,
                        ephemeral: true 
                    });
                }
                else return;
            }
        }

        const b3 = await v2.find({
            GG: gg,
            VerificationLevel: "MEDIUM",
            user: "anon",
        })

        if (b3) {
            for (tt of b3) {
                
            }
        }
    }
    })
}