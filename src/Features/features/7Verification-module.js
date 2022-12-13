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
    } 
    })

    client.on("messageCreate", async (message) => {
        if (message.channel.type === "DM") return;
        const GG = message.guild.id
        const user = message.member
        const cont = message.content
        if (message.author.bot) return;
        
        const B1 = await v1.find({
            GuildID: GG,
            Verification: "YES"
        })
        if (B1) {
            const B2 = await v2.find({
                GG,
                user: "anon",
                VerificationLevel: "MEDIUM",
            })
            if (B2) {
                for (vv of B2) {
                    const chan = vv.VerificationChan
                    const Role = vv.VerificationRole
                     
                    if (message.channel.id === chan) {
                        if (cont === "Verify"|| cont === "verify" || cont === "VERIFY") {
                              const CheckRole = message.guild.roles.cache.find((role) => role.id === `${Role}`)
                               if (CheckRole) {
                                 user.send(`You are verified!! \n **${message.guild.name}**`)
                                 .catch(() => console.log("Can't send this user dm!!"))

                                   user.roles.add(Role);    
                                   
                                   message.delete();
                              } else {
                                message.reply(`Contact admin of the server to check verification role!!`);
                              }
                           
                        } else return message.delete();   
                    }  else return;
                }
            } else return;
        } else return;
    })
}