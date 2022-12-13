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
            } 

            const N1 = await v2.find({
                GG,
                user: "anon",
                VerificationLevel: "HARD",
            })
            if (N1) {
                for (oo of N1) {
                    const CHAN = oo.VerificationChan
                    const MSgChan = oo.VerificationMsgchannel
                    
                    if (message.channel.id === CHAN) {
                        let mssg = message.content;

                        const CHannel = client.channels.cache.get(MSgChan);
                        if (CHannel) {
                            message.author.send(`Thank you for sending in your verification form! One of the mods will check your answer and verify you for the server. We wish you a nice day and a good stay in the server. \n\n **${message.guild.name}**`)
                            .catch(() => console.log(`Can't send this in DM!!`));
                              
                            const { MessageEmbed,  MessageActionRow, MessageButton } = require("discord.js");
                            const Embed = new MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription(`<@${message.author.id}> Wants to get verified!! \n ${message.content}`)
                            .setTimestamp()

                            const row = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                .setCustomId(`AC${message.member.id}`)
                                .setLabel("Accept")
                                .setStyle("SUCCESS"),

                                new MessageButton()
                                .setCustomId(`DN${message.member.id}`)
                                .setLabel("Deny")
                                .setStyle("DANGER")
                            )
                      
                            
                            const Gd = await CHannel.send({
                                embeds: [Embed],
                                components: [row],
                            });

                            const ID = Gd.id

                            const L1 = await v2.findOneAndUpdate({
                                GG: GG,
                                user: user.id,
                            },{
                                user: user.id,
                                VerificationStatus: "WAITING",
                                MSGID: ID,
                            },{
                                upsert: true,
                                new: true,
                            })
                            
                        }
                        message.delete();
                    }

                }
            }

        } else return;
    });

    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isButton()) return;
      const Guild = interaction.guild.id;
      const BID = interaction.customId;
      console.log(interaction);
      
              const K1 = await v1.find({
                GuildID: Guild,
                Verification: "YES",
              })
              if (K1) {
                const K2 = await v2.find({
                    GG: Guild,  
                    MSGID: interaction.id,
                    VerificationStatus: "WAITING",
                })
                if (K2) {
                    for (tt of K2) {
                        const Role = tt.VerificationRole
                        const auth = tt.user

                        if (BID === `AC${auth}`) {
                            interaction.guild.members.cache.get(auth).roles.add(Role);
                            const USer = interaction.guild.members.cache.get(auth);

                            USer.send(" Hi! A mod just verified you for access on the Study Vibes server. \nWe wish you good luck with your studies and a happy stay! \n Don't forget to have a look at the toolbox-channel to unlock different toolbox-clubs!")
                            .catch(() => console.log("Can't send this user dm!!"));
                            return interaction.reply({
                                content: "Verification Done!!",
                                ephemeral: true,
                            })
                        }
                        if (BID === `DN${auth}`) {
                            const USer = interaction.guild.members.cache.get(auth);

                            USer.send("Hi! Unfortunately you did not pass the verification process for our server. If you think this was a mistake feel free to contact an available mod. We wish you all the best. ")
                                .catch(() => console.log("Can't send this user dm!!"))
                                return interaction.reply({
                                    content: "Verification Done!!",
                                    ephemeral: true,
                                })
                    } 
                }
            }
        }
    })
}