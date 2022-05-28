const S1 = require("../models/3server-registered");
const S2 = require("../models/4Stats");
const S3 = require("../models/5Channels");
const S4 = require("../models/1.guild-prefix");
const S5 = require("../models/6warn");
const S6 = require("../models/7welcome");
const S7 = require("../models/8vc-study");
const S8 = require("../models/11todo");
const S9 = require("../models/12Todo");
const { MessageEmbed } = require("discord.js");

async function help(interaction) {
    const HelpEmbed = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle('help')
        .addFields(
            { name: 'Setup', value: " `/setup stats` \n `/setup schedule` \n `/setup vc-study` \n `/setup forest-session` \n `/setup bday` \n `/setup prefix` \n `/setup welcome` \n `/setup enable-commands` \n `/setup disable-commands`", inline: true },
            { name: 'Birthday', value: " `/Birthday help` \n `/Birthday add [Day] [Month] [Year]` \n `/birthday list [month-number]`", inline: true },
            { name: 'warning', value: " `/warn warn-user [target-user] [reason]` \n `/warn stats [user]`", inline: true },
            { name: 'server-invites', value: "`/server-invites`", inline: true },
            { name: 'Delete Messages', value: " `/purge [message-count]` ", inline: true },
            { name: 'Ticket/support in server', value: " `/ticket open` \n `/ticket close`", inline: true },
            { name: 'ping', value: " `/ping`", inline: true },
            { name: 'quote', value: " `/quote`", inline: true },
            { name: 'Forest', value: " `/forest code [code/link] [starting] [duration]` \n `/forest help`", inline: true },
            { name: 'Todo', value: " `/todo add [Task]` \n `/todo done [task-number]` \n `/todo list` \n `/todo reset` \n `/todo remove [Task-number]` \n `/todo score`", inline: true },
            { name: 'Study_Time', value: " `/studyTime`", inline: true },
            { name: 'report', value: " `/report report-feature` \n `/report appreciate`", inline: true },
            { name: 'schedule', value: "`/schedule [tasks]`", inline: true },
            { name: 'Customised command', value: "`/create-cmd [command info]`", inline: true },
            { name: 'Dashboard', value: "`currently in development`", inline: true }
        )

    await interaction.reply({ embeds: [HelpEmbed] });

}

async function SetupStats(interaction) {
    const A2 = await S1.findOneAndUpdate({
        GuildID: interaction.guild.id,
    }, {
        GuildID: interaction.guild.id,
        Stats: "YES",
    }, {
        upsert: true,
        new: true,
    })
    await interaction.reply(`☑ The setup has been initiated and will now automatically update the counters every 10 minutes!!`);
    const GG = interaction.guild.id
    const guild = interaction.guild
    await guild.channels.create("📊Stats",
        {
            type: "GUILD_CATEGORY"
        })
    const Category = interaction.guild.channels.cache.find(cat => cat.name === "📊Stats").id;
    if (Category) {
        await guild.channels.create(`Member-Count: ${guild.memberCount} `, {
            type: 'GUILD_VOICE',
        }).then(async vc => {
            vc.setParent(Category).then(async (settedParent) => {
                settedParent.permissionOverwrites.edit(guild.roles.everyone, {
                    VIEW_CHANNEL: true, CONNECT: false,
                });
                const A1 = await S2.findOneAndUpdate({
                    GG,
                }, {
                    GG,
                    Category,
                    MemberCount: vc.id,
                }, {
                    upsert: true,
                    new: true,
                })
                console.log(A1);
            });
        });
        const members = await guild.members.fetch();
        const botCount = members.filter(member => member.user.bot).size;

        await guild.channels.create(`Bots: ${botCount}`, {
            type: 'GUILD_VOICE',
        }).then(async vc => {
            vc.setParent(Category).then(async (settedParent) => {
                settedParent.permissionOverwrites.edit(guild.roles.everyone, {
                    VIEW_CHANNEL: true, CONNECT: false,
                });
                const A3 = await S2.findOneAndUpdate({
                    GG,
                }, {
                    GG,
                    Category,
                    Bots: vc.id,
                }, {
                    upsert: true,
                    new: true,
                })
                console.log(A3);
            });
        });

    } else return await interaction.reply({ content: 'Something went wrong!! Please try again!!', ephemeral: true })
}

async function SetupSchedule(interaction) {
    const guild = interaction.guild
    const GG = guild.id
    const channel = interaction.options.getChannel("schedule-channel");
    const ScheduleEmbed = new MessageEmbed()
        .setColor('#e7b90b')
        .setTitle(`Hello this channel is set for all Schedule!! \n Fore more help use !help`)
        .setDescription(`Here you can post your to-do for daily Purpose!! \n **!schedule 1.Drawing \n 2. Painting \n 3. Maths \n 4. Vollyball \n 5. Gardening ** or \n \schedule 1.Drawing \n 2. Painting \n 3. Maths \n 4. Vollyball \n 5. Gardening`)
        .setImage('https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png')


    if (channel) {
        await channel.send({ embeds: [ScheduleEmbed] });
        const A4 = await S1.findOneAndUpdate({
            GuildID: interaction.guild.id,
        }, {
            GuildID: interaction.guild.id,
            Schedule: "YES",
        }, {
            upsert: true,
            new: true,
        });

        const A5 = await S3.findOneAndUpdate({
            GG,
        }, {
            GG,
            Schedulechan: channel.id,
        }, {
            upsert: true,
            new: true,
        })
        console.log(A5);

    } else {
        await guild.channels.create(`📃▪️schedule-channel`, {
            type: 'GUILD_TEXT',
        }).then(async vc => {
            vc.setParent(Category).then(async (settedParent) => {
                const A6 = await S3.findOneAndUpdate({
                    GG,
                }, {
                    GG,
                    Schedulechan: vc.id,
                }, {
                    upsert: true,
                    new: true,
                })
                console.log(A6);
                await vc.send({ content: "Please shift this channel where you want to place it!!", embeds: [ScheduleEmbed] })
            });
        });
    }
    await interaction.reply("Setup completed!!");
}

async function SetupVcStudy(interaction) {
    const J1 = require("../models/14VCStudy");
    const StudyRoles = interaction.options.getRole("study-role")
    const StudyVC = interaction.options.getChannel("vc-channel")
    const StudyChan = interaction.options.getChannel("logs-channel")
    const StudyMsg = interaction.options.getString("custom-message")
    const guild = interaction.guild

    if (StudyRoles) {
        const J2 = await J1.findOneAndUpdate({
            guildId: guild.id,
            user: "anon",
        }, {
            RoleID: StudyRoles.id,
        }, {
            upsert: true,
            new: true,
        });
    } else {
        // count using joining and leaving vc time.
        const J7 = await J1.findOneAndUpdate({
            guildId: guild.id,
            user: "anon",
        }, {
            VCTIMETYPE: "JOIN_N_LEAVE",
        }, {
            upsert: true,
            new: true,
        });

    }
    if (StudyVC) {
        const Check = interaction.client.channels.cache.filter(c => c.type === "GUILD_VOICE" && c.id === `${StudyVC}`)
        if (Check) {
            const J3 = await J1.findOneAndUpdate({
                guildId: guild.id,
                user: "anon",
            }, {
                VcChannel1: StudyVC.id,
            }, {
                upsert: true,
                new: true,
            });
        } else
            interaction.channel.send(`You did not provided the correct voice channel!!`);
    } else {
        // Create 2 random VCs
        guild.channels.create("📚 ・Study-Section・📚", { type: 'GUILD_CATEGORY' })
            .then(async () => {
                const Category = guild.channels.cache.find(c => c.name === "📚 ・Study-Section・📚" && c.type === "GUILD_CATEGORY");
                guild.channels.create('🔈・Study-Hall', { type: 'GUILD_VOICE' })
                    .then(async (channel) => {
                        let role = guild.roles.cache.find(role => role.name === "@everyone");
                        const category2 = Category.id
                        channel.setParent(category2).then(async (settedParent) => {
                            settedParent.updateOverwrite(role, {
                                "VIEW_CHANNEL": true,
                                "CONNECT": true,
                                "CREATE_INSTANT_INVITE": true,
                            });
                            const J6 = await J1.findOneAndUpdate({
                                guildId: guild.id,
                                user: "anon",
                            }, {
                                VcCategory: category2,
                                VcChannel1: settedParent.id,
                            }, {
                                upsert: true,
                                new: true
                            })
                        });
                    });
            });
    }

    if (StudyChan) {
        const J4 = await J1.findOneAndUpdate({
            guildId: guild.id,
            user: "anon",
        }, {
            TextChannel: StudyChan.id,
            Notification: "YES",
        }, {
            upsert: true,
            new: true,
        });
    }

    if (StudyMsg) {
        const J5 = await J1.findOneAndUpdate({
            guildId: guild.id,
            user: "anon",
        }, {
            VCMSG: StudyMsg,
        }, {
            upsert: true,
            new: true,
        });
    }

    await interaction.reply(`Your VCStudy Setup is completed!!`);
}

async function SetupForest(interaction) {
    const F1 = require("../models/13Forest");
    const GG = interaction.guild.id
    const user = "anon"
    const Channel = interaction.options.getChannel("forest-channel");
    const Role = interaction.options.getRole("forest-role");
    const F4 = await S1.findOneAndUpdate({
        GuildID: GG,
    }, {
        Forest: "YES",
    }, {
        upsert: true,
        new: true
    });

    if (Channel) {
        const F2 = await F1.findOneAndUpdate({
            GG,
            user,
        }, {
            user,
            Channel: Channel.id,
        }, {
            upsert: true,
            new: true,
        });
    }

    if (Role) {
        const F3 = await F1.findOneAndUpdate({
            GG,
            user,
        }, {
            user,
            Role: Role.id,
        }, {
            upsert: true,
            new: true,
        });
    }
    await interaction.reply(`Your forest feature is now enabled!!`);
}

async function SetupBday(interaction) {
    const GG = interaction.guild.id
    const user = "anon"
    const BDChannel = interaction.options.getChannel("bday-channel").id;
    const BDRole = interaction.options.getRole("bday-role").id;
    const B1 = require("../models/10Bday");
    const E1 = await S1.findOneAndUpdate({
        GuildID: GG,
    }, {
        Bday: "YES",
    }, {
        upsert: true,
        new: true
    })

    const B2 = await B1.findOneAndUpdate({
        GG,
        user,
    }, {
        user,
        BDChannel,
    }, {
        upsert: true,
        new: true,
    });

    if (BDRole) {
        const B3 = await B1.findOneAndUpdate({
            GG,
            user,
        }, {
            user,
            BDRole,
        }, {
            upsert: true,
            new: true,
        });
    }

    await interaction.reply(`Bday feature enabled for ${interaction.guild.name}`);
}

async function SetupPrefix(interaction) {
    const prefix = interaction.options.getString("new-prefix");
    const A7 = await S4.findOneAndUpdate({
        _id: interaction.guild.id,
    }, {
        _id: interaction.guild.id,
        prefix,
    }, {
        upsert: true,
        new: true,
    })
    await interaction.reply(`Changed your server prefix to ${prefix} `);

}

async function SetupWelcome(interaction) {
    const guild = interaction.guild
    const A8 = await S1.findOneAndUpdate({
        GuildID: interaction.guild.id,
    }, {
        GuildID: interaction.guild.id,
        welcome: "YES",
    }, {
        upsert: true,
        new: true,
    });
    console.log(A8);
    const wdm = interaction.options.getInteger("welcome-dm");
    const wch = interaction.options.getChannel("welcome-channel");
    const war = interaction.options.getRole("auto-role");
    const wmg = interaction.options.getString("welcome-message");

    if (wch) {
        const A9 = await S6.findOneAndUpdate({
            guildID: guild.id, npm
        }, {
            guildID: guild.id,
            channelID: wch.id,
        }, {
            upsert: true,
            new: true,
        })
        console.log(A9);

    } else {
        const A9 = await S6.findOneAndUpdate({
            guildID: guild.id,
        }, {
            guildID: guild.id,
            channelID: guild.systemChannel.id,
        }, {
            upsert: true,
            new: true,
        })
        console.log(A9);
    }
    if (wdm) {
        if (wdm === 1) {
            const A10 = await S6.findOneAndUpdate({
                guildID: guild.id,
            }, {
                guildID: guild.id,
                WDM: "YES",
            }, {
                upsert: true,
                new: true,
            })
            console.log(A10);
        }
        if (wdm === 2) {
            const A10 = await S6.findOneAndUpdate({
                guildID: guild.id,
            }, {
                guildID: guild.id,
                WDM: "NO",
            }, {
                upsert: true,
                new: true,
            })
            console.log(A10);
        }
    }
    if (wmg) {
        const A11 = await S6.findOneAndUpdate({
            guildID: guild.id,
        },
            {
                guildID: guild.id,
                messa: wmg,
            }, {
            upsert: true,
            new: true,
        })
        console.log(A11);
    } else {
        const A11 = await S6.findOneAndUpdate({
            guildID: guild.id,
        },
            {
                guildID: guild.id,
                messa: `Welcome to ${guild.name}!!`,
            }, {
            upsert: true,
            new: true,
        })
        console.log(A11);
    }

    if (war) {

        const role = war.id

        const newRole = guild.roles.cache.find((r) => {
            return r.id === role
        }) || null

        if (!newRole) return;

        const A12 = await S6.findOneAndUpdate({
            guildID: guild.id,
        }, {
            guildID: guild.id,
            RRole: role,
            roleyes: "YES",
        }, {
            upsert: true,
            new: true,
        })
        console.log(A12);
    }
}

async function SetupEnable(interaction) {
    const Icon = interaction.guild.iconURL()
    const { MessageEmbed } = require("discord.js");
    let reply = "1. Bday Feature `/setup bday`\n"
    reply += "2. Forest Feature `/setup forest-session`\n"
    reply += "3. Reactions Feature `/setup reactionrole`\n"
    reply += "4. Todo Feature `/todo`\n"
    reply += "5. Event Feature `/events`\n"
    reply += "6. VCStudy Feature `/setup vc-study`\n"
    reply += "7. Stats Feature `/setup stats`\n"
    reply += "8. Schedule Feature `/setup schedule`\n"
    reply += "9. Ticket|| support Feature `/ticket`\n"
    reply += "10. Logs Feature `/Logs`\n"
    reply += "11. Welcome Feature `/setup welcome`\n"

    const setupEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setTitle(`List of features available`)
        .setDescription(reply)
        .setFooter({
            text: "FriendlyBot",
            iconURL: Icon,
        })

    await interaction.reply({ embeds: [setupEmbed] });

    /**
     * Features:
     * 1. Bday
     * 2. Forest
     * 3. Reactions [Still remaining!!]
     * 4. Todo
     * 5. Event [Still remaining!!]
     * 6. VCStudy done 
     * 7. Stats 
     * 8. Schedule 
     * 9. Ticket 
     * 10. Logs [Still remaining]
     * 11. Welcome [Still Remaining]
     */

}

async function SetupDisable(interaction) {
    const { MessageActionRow, MessageSelectMenu } = require("discord.js");
    /**
     * Features:
     * 1. Bday
     * 2. Forest
     * 3. Reactions [Still remaining!!]
     * 4. Todo
     * 5. Event [Still remaining!!]
     * 6. VCStudy 
     * 7. Stats 
     * 8. Schedule 
     * 9. Ticket [still remaining]
     * 10. Logs [Still remaining]
     * 11. Welcome [Still Remaining]
     */
    const code1 = "BD001"
    const code2 = "FR002"
    const code3 = "RN003"
    const code4 = "TD004"
    const code5 = "ET005"
    const code6 = "VS006"
    const code7 = "ST007"
    const code8 = "SD008"
    const code9 = "TC009"
    const code10 = "LG010"
    const code11 = "WL011"

    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId(`DisableCMDS`)
                .setMinValues(1)
                .setPlaceholder("Select the features you want to disable!!")
                .addOptions([
                    {
                        label: 'Birthday-Module',
                        value: code1,
                    },
                    {
                        label: 'Forest-Module',
                        value: code2,
                    },
                    {
                        label: 'Reactions-Module',
                        value: code3,
                        description: "currently unavailable!!",
                    },
                    {
                        label: 'Todo-Module',
                        value: code4,
                    },
                    {
                        label: 'Event-Module',
                        value: code5,
                    },
                    {
                        label: 'VcStudy-Module',
                        value: code6,
                    },
                    {
                        label: 'Stats-Module',
                        value: code7,
                    },
                    {
                        label: 'Schedule-Module',
                        value: code8,
                    },
                    {
                        label: 'Ticket-Module',
                        value: code9,
                    },
                    {
                        label: 'Logs-Module',
                        value: code10,
                    },
                    {
                        label: 'Welcome-Module',
                        value: code11,
                    }
                ])
        )

    await interaction.reply({ content: "Disable features", components: [row] });

}

async function Bdayhelp(interaction) {
    const BdayEmbed = new MessageEmbed()
        .setColor('FUCHSIA')
        .setTimestamp()
        .setTitle("Birthday-module")
        .setDescription('To use birthday module \n for adding your bday `/birthday add [day] [Month] [Year]` \n\n For checking the list of birthdays in any month: `/birthday list` => Displays current month list \n `/birthday list [Month]` => Displays provided month birthday list')

    await interaction.reply({ embeds: [BdayEmbed] });
}

async function BdayAdd(interaction) {
    const guild = interaction.guild
    const user = interaction.member.id
    const T1 = require("../models/3server-registered");
    const A1 = await T1.find({
        GuildID: guild.id,
        Bday: "YES",
    })
    if (A1) {
        const B1 = require("../models/10Bday");
        let Day = interaction.options.getInteger("day");
        let Month = interaction.options.getInteger("month");
        const Year = interaction.options.getInteger("year");

        if (Day < 10) {
            const DI = Day
            Day = `0${DI}`
        }
        if (Month < 10) {
            const MI = Month
            Month = `0${MI}`
        }
        const Current_Year = new Date().getFullYear()
        const Age = Math.round(Current_Year - Year)      // 2022 - 2004
        const BDAY = `${Day}/${Month}/${Year}` // It will return in format = DD/MM/YYYY

        // Check if user is in other servers as well where bot is present!! Wish him there as well if the server has bday feature enable!!
        const B2 = await B1.findOneAndUpdate({
            GG: guild.id,
            user,
        }, {
            GG: guild.id,
            user,
            Day,
            Month,
            Year,
            Age,
            BdDate: BDAY,
        }, {
            upsert: true,
            new: true,
        });
        console.log(B2);

        await interaction.reply(`Your birthday is now saved ${BDAY} - (${Age})🎈`);
    } else return await interaction.reply(`‼ This feature is disabled for this server. For more info use **/info**`);
}

async function BdayList(interaction) {
    const get_month = interaction.options.getInteger("month-bday");
    const current_month = new Date().getMonth()
    var m_names = ['January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    const T1 = require("../models/10Bday");
    const GG = interaction.guild.id
    const Icon = interaction.guild.iconURL()
    const { MessageEmbed } = require("discord.js");
    const T2 = require("../models/3server-registered");
    const A1 = await T2.find({
        GuildID: guild.id,
        Bday: "YES",
    })
    if (A1) {
        if (!get_month) {
            const T4 = await T1.find({
                GG,
                Month: current_month,
            });
            for (qq of T4) {
                const BD = qq.user
                const DD = qq.Day
                const AD = qq.Age
                const get_user = interaction.guild.users.cache.fetch(BD) || `<@${BD}>`
                const Repl = `> ${get_user} ➡ ${DD}/${get_month} (${AD}) \n`
                var Mname = m_names[current_month];

                const bdembed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setTitle(`Bday's in this server for ${Mname} 🍰`)
                    .setDescription(Repl)
                    .setFooter({
                        text: "FriendlyBot",
                        iconURL: Icon,
                    })

                await interaction.reply({ embeds: [bdembed] });
            }
        } else {
            const T4 = await T1.find({
                GG,
                Month: get_month,
            });
            for (qq of T4) {
                const BD = qq.user
                const DD = qq.Day
                const AD = qq.Age
                const get_user = interaction.guild.users.cache.fetch(BD) || `<@${BD}>`
                const Repl = `> ${get_user} ➡ ${DD}/${get_month} (${AD}) \n`
                var Mname = m_names[get_month];

                const bdembed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setTitle(`Bday's in this server for ${Mname} 🍰`)
                    .setDescription(Repl)
                    .setFooter({
                        text: "FriendlyBot",
                        iconURL: Icon,
                    })

                await interaction.reply({ embeds: [bdembed] });
            }
        }

    } else return await interaction.reply(`‼ This feature is disabled for this server. For more info use **/info**`);
}

async function Warning(interaction) {
    const user = interaction.options.getUser("target");
    const reason = interaction.options.getString("warn-reason");
    //  if (!interaction.user.permissions.has("BAN_MEMBERS")) return await interaction.reply("You do not have required perms!!");
    if (user.id === interaction.member.id) return await interaction.reply(`You cannot warn yourself!!!`);
    const guildId = interaction.guild.id
    const userId = user.id
    if (reason) {
        const warning = {
            author: interaction.member.id,
            timeStamp: new Date().getTime(),
            reason,
        }

        const A8 = await S5.findOneAndUpdate({
            guildId,
            userId,
        }, {
            guildId,
            userId,
            $push: {
                warnings: warning,
            },
        }, {
            upsert: true,
            new: true,
        });

        await interaction.reply(`${"<@" + user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
            **Please behave according to the rules!**`);
    } else {
        const warning = {
            author: `<@${interaction.member}>`,
            timeStamp: new Date().getTime(),
        }

        const A8 = await S5.findOneAndUpdate({
            guildId,
            userId,
        }, {
            guildId,
            userId,
            $push: {
                warnings: warning,
            },
        }, {
            upsert: true,
            new: true,
        });

        await interaction.reply(`${"<@" + user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
            **Please behave according to the rules!**`)

    }

}

async function WarningStats(interaction) {
    if (!interaction.member.permissions.has("BAN_MEMBERS")) return await interaction.reply("You do not have required perms!!");
    const { MessageEmbed } = require("discord.js");
    const user = interaction.options.getUser("stat-user").id
    const guildId = interaction.guild.id
    const userId = user

    const A13 = await S5.findOne({
        guildId,
        userId,
    })

    let reply = `⚠ Warnings for <@${user}>: \n\n`

    for (const warning of A13.warnings) {
        const { author, timestamp, reason } = warning

        reply += `By ${author} on ${new Date(timestamp).toLocaleDateString()} for ${reason || "No reason specified!!"}\n`
    }

    const wembed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(reply)
        .setThumbnail("https://img.icons8.com/emoji/452/warning-emoji.png")

    await interaction.reply({ embeds: [wembed] });
}

async function ServerInvites(interaction) {
    //  if (!interaction.member.permissions.has("BAN_MEMBERS")) return await interaction.reply("You do not have required perms!!");
    const guild = interaction.guild


    guild.fetchInvites().then(async (invites) => {
        const inviteCounter = {}

        invites.forEach(async (invite) => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${username}#${discriminator}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        })

        let replyText = 'Here are the top 5 **Invites**:'

        const sortedInvites = Object.keys(inviteCounter).sort(
            (a, b) => inviteCounter[b] - inviteCounter[a]
        )

        console.log(sortedInvites)

        sortedInvites.length = 5

        for (const invite of sortedInvites) {
            const count = inviteCounter[invite]
            replyText += `\n${invite} has invited ${count} member(s)!`
        }

        const { MessageEmbed } = require("discord.js");
        const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription(replyText)

        await interaction.reply({ embeds: [Embed] });
    })
}

async function Purge(interaction) {
    //  if (!interaction.member.permissions.has("BAN_MEMBERS")) return await interaction.reply("You do not have required perms!!");
    const val = interaction.options.getInteger("message-count");
    interaction.channel.messages.fetch({ limit: val + 1 }).then(async messages => {
        interaction.channel.bulkDelete(messages);
    });

    await interaction.reply("Deleted messages!!");
}

async function TicketOpen(interaction) {
    const Tic = require("../models/9Ticket");
    const user = interaction.member.username
    const guild = interaction.guild
    const C1 = await Tic.find({
        GG: guild.id,
    })
    if (C1) {
        for (C2 of C1) {
            const Cate = C2.Cat
            await interaction.reply(`Your ticket channel has been created please check the moderators category.`);

            const Role = message.guild.roles.cache.find(role => role.name === "@everyone");
            const guild = client.guilds.cache.get("806504713935781958");
            const role = guild.roles.cache.forEach(role => {
                if (role.permissions.has("BAN_MEMBERS")) {
                    console.log(role.name);
                    message.guild.channels
                        .create(name, {
                            type: 'GUILD_TEXT',
                        })
                        .then((channel) => {
                            console.log(channel)
                            const category = Cate
                            channel.setParent(category).then(async (settedParent) => {
                                settedParent.updateOverwrite(Role, {
                                    "VIEW_CHANNEL": false,
                                    "READ_MESSAGES": false, "SEND_MESSAGES": false,
                                    "ATTACH_FILES": false,
                                    "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false
                                });
                                settedParent.updateOverwrite(role, {
                                    "VIEW_CHANNEL": true, "READ_MESSAGES": true,
                                    "SEND_MESSAGES": true, "ATTACH_FILES": true
                                })
                                settedParent.updateOverwrite(message.author, {
                                    "VIEW_CHANNEL": true,
                                    "READ_MESSAGES": true, "SEND_MESSAGES": true,
                                    "ATTACH_FILES": true,
                                    "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                                });
                                const discord = require('discord.js')
                                var Ticketembed = new discord.MessageEmbed()
                                    .setColor('#e7b90b')
                                    .setTitle(`Hi, ${name}. To close write **!close @${name}**)`)

                                settedParent.send(Ticketembed)
                            })
                        })
                } else return;
            });
        }
    } else return;


}

async function TicketClose(interaction) {
    const user = interaction.member
    if (!user.permissions.has("BAN_MEMBER")) return await interaction.reply("You do not have the required perms for using this cmd!!");
    const Tic = require("../models/9Ticket");
    const guild = interaction.guild
    const Channel = interaction.channel
    const check = await Tic.find({
        GG: guild.id,
    })
    if (check) {
        for (EE of check) {
            const Category = EE.Cat
            const Log = EE.LogChan
            const person = interaction.options.getUser("ticket-user");
            if (interaction.channel.parentId === Category) {
                const LoGC = interaction.client.channels.cache.get(Log);
                if (LoGC) {
                    await LoGC.send(`The support channel of ${"<@" + person.user.id + ">"} has been closed by ${"<@" + interaction.member.id + ">"}`)
                    await interaction.reply(`Closing channel!!`);
                    Channel.delete()
                } else {
                    await interaction.reply(`Closing channel!!`);
                    Channel.delete()
                }
            } else {
                await interaction.reply(`Use the cmd in support channel!!`);
            }
        }
    }
    if (!check) return await interaction.reply(`This feature is not yet set up for your server!!`);

}

async function Ping(interaction) {
    const wait = require('node:timers/promises').setTimeout;

    await interaction.reply('Pong!');
    await wait(2000);
    await interaction.editReply(`API Latency: ${interaction.client.ws.ping}`);

}

async function Quote(interaction) {
    const { randomQuotes } = require("../utils/1random-quotes.json");
    const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${interaction.member.username}`)
        .setDescription(`Personalised quote: \n ${randomQuotes[Math.floor(Math.random() * randomQuotes.length)]}`)
        .setTimestamp()

    await interaction.reply({ embeds: [embed] });
}

async function ForestCode(interaction) {
    const code = interaction.options.getString("code-link")
    const Starting = interaction.options.getInteger("starting")
    const Duration = interaction.options.getInteger("tree-duration")
    const { randomForest } = require("../utils/2Forest.json");
    let thumb = randomForest[Math.floor(Math.random() * randomForest.length)]
    const guild = interaction.guild
    const K1 = await S1.find({
        GuildID: guild.id,
        Forest: "YES",
    })
    if (K1) {
        const K2 = require("../models/13Forest");
        const K3 = await K2.find({
            GG: guild.id,
            user: "anon",
        })
        if (K3) {
            for (JJ of K3) {
                const FRole = JJ.Role
                const FChan = JJ.Channel
                const CHAN = guild.channels.cache.get(FChan)
                const TreeEmbed = new MessageEmbed()
                    .setColor('#33adc0')
                    .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
                    .setThumbnail(`${thumb}`)
                    .setTimestamp()
                    .setFooter(`Planter: ${message.author.username} `)
                    .addFields(
                        { name: '\u200B', value: 'Forest info:' },
                        { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
                        { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
                        { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true }
                    )
                if (FRole) {
                    if (CHAN) {
                        await interaction.reply({ content: `Code sent to <#${FChan}>!!`, ephemeral: true });
                        CHAN.send({ content: `<@&${FRole}>`, embeds: [TreeEmbed] });
                    } else {
                        await interaction.reply({ content: `<@&${FRole}>`, embeds: [TreeEmbed] })
                    }
                } else {
                    if (CHAN) {
                        await interaction.reply({ content: `code sent to <#${FChan}>!!`, ephemeral: true });
                    } else {
                        await interaction.reply({ embeds: [TreeEmbed] });
                    }
                }

            }
        } else return await interaction.reply(`Feature is not set yet!! Ask your mods to set it up!!`);
    } else return await interaction.reply(`This feature is disabled for your server!! For more try **/info**`);
}

async function ForestHelp(interaction) {
    const forestEmbed = new MessageEmbed()
        .setColor('#13eb46')
        .setTitle(`Here is the method how to use forest command :point_down:`)
        .addFields(
            { name: '1. What is forest', value: `[Click here to know](https://www.forestapp.cc/ 'About Forest')` },
            { name: '2. Forest', value: 'Members have a simple cmd called \n **/forest code** with three options `code` `Starting Time` `Duration` \n which can be used from anywhere . All those logs will go directly to the channel you set.' },
            { name: '9. forest cmd', value: '/forest code `code` `Duration` `starting time`' }
        )

    await interaction.reply({ embeds: [forestEmbed] });
}

// S8 Count  // S9 Main
async function TODOADD(interaction) {
    const GG = interaction.guild.id
    const user = interaction.member.id
    const TODO = interaction.options.getString("task");
    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T1 = await S8.findOneAndUpdate({
            GG,
            user,
        }, {
            user,
            $inc: {
                TodoCounting: 1,
            }
        }, {
            upsert: true,
            new: true
        })
            .exec()

        const C1 = await S8.findOne({
            GG,
            user,
        })
        if (C1) {
            let TodoCount = await C1.TodoCounting
            let TodoList = {
                GG,
                user,
                TodoCount,
                TODO
            }

            await new S9(TodoList).save()

            await interaction.reply(`Saved your Task **${TodoCount} --- ${TODO}**`);
        }
        // We will add reminder function in the end!! Let's just go with basic first!!
    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function TODODONE(interaction) {
    const GG = interaction.guild.id
    const user = interaction.member.id
    const TodoCount = interaction.options.getInteger("tasknumber")
    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T1 = await S9.find({
            GG,
            user,
            TodoCount,
        })

        if (T1) {
            for (QQ of T1) {
                const Goal = QQ.TODO
                const TODO = `${Goal} => Done`
                const TG = await S9.findOneAndUpdate({
                    GG,
                    user,
                    TodoCount,
                }, {
                    TODO,
                }, {
                    upsert: true,
                })
                await interaction.reply(`Ticked your task!! ${Goal}`);

                const T2 = await S8.findOneAndUpdate({
                    GG,
                    user,
                }, {
                    user,
                    $inc: {
                        Score: 2,
                    },
                }, {
                    upsert: true,
                    new: true,
                })
            }
        } else return await interaction.reply(`You do not have any todo list!!`);

    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function TODOLIST(interaction) {
    const GG = interaction.guild.id
    const Icon = interaction.guild.iconURL()
    const user = interaction.member.id
    const { MessageEmbed } = require("discord.js");

    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T3 = await S9.find({
            GG,
            user,
        })

        if (T3 && T3.length > 0) {
            let Sorting = T3
            let reply = `\n`
            for (WW of Sorting) {
                reply += `**${WW.TodoCount}.** *${WW.TODO}* \n`
            }

            const Embed2 = new MessageEmbed()
                .setTitle(`To-do List:`)
                .setThumbnail(`https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png`)
                .setTimestamp()
                .setDescription(reply)
                .setFooter({
                    text: "FriendlyBot",
                    iconURL: Icon,
                })

            await interaction.reply({ content: `<@${user}>`, embeds: [Embed2] });
        } else return await interaction.reply(`You do not have any todo list!!`);

    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function TODORESET(interaction) {
    const GG = interaction.guild.id
    const user = interaction.member.id

    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T5 = await S9.deleteMany({
            GG,
            user,
        });

        const T6 = await S8.findOneAndUpdate({
            GG,
            user,
        }, {
            user,
            TodoCounting: 0,
        }, {
            upsert: true,
        });
        await interaction.reply(`Deleted all your tasks!!`);
    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function TODOREMOVE(interaction) {
    const GG = interaction.guild.id
    const user = interaction.member.id
    const TodoCount = interaction.options.getInteger("number");
    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T1 = await S9.find({
            GG,
            user,
            TodoCount,
        })
        if (T1) {
            for (qq of T1) {
                const Goal = qq.TODO
                await interaction.reply(`Deleted your task ${Goal}`);
            }
            const T5 = await S9.findOneAndDelete({
                GG,
                user,
                TodoCount,
            })
        } else return await interaction.reply(`There is no task with ${TodoCount}`);
    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function TODOSCORE(interaction) {
    const GG = interaction.guild.id
    const user = interaction.member.id

    const A1 = await S1.find({
        GuildID: GG,
        Todo: "YES",
    })

    if (A1) {
        const T1 = await S8.find({
            GG,
            user,
        })
        if (T1) {
            for (rr of T1) {
                const points = rr.Score
                await interaction.reply(`Your score is ${points} Todo-points!!`);
            }
        } else return await interaction.reply("You do not have any Todo-points :c");
    } else return await interaction.reply(`This feature is disabled by server admin or it is by default!! \n please use **/info** for more!!`);

}

async function StudyTime(interaction) {
    const guild = interaction.guild
    const guildId = guild.id
    const user = interaction.member.id

    const Y1 = await S1.find({
        GuildID: guild.id,
        VCStudy: "YES",
    })
    if (Y1) {
        const { MessageEmbed } = require("discord.js");

        const userdataSchema = require('../models/14VCStudy');
        const userdocumentSchema = require('../models/14VCStudy');
        // const UserID = target.id

        const logperson = await userdocumentSchema.find({
            guildId,
            user,
        })
        for (person of logperson) {
            const daily = person.Daily
            const weekly = person.Weekly
            const monthly = person.Monthly
            const alltime = person.ServerTime

            const roundeddaily = Math.round(daily * 10) / 10
            const roundedweekly = Math.round(weekly * 10) / 10
            const roundedmonthly = Math.round(monthly * 10) / 10
            const roundedalltime = Math.round(alltime * 10) / 10


            const results = await userdataSchema.find({
                guildId,
                user: 'anon'
            })
            for (const time of results) {
                const alldaily = time.Daily
                const allweekly = time.weekly
                const allmonthly = time.Monthly
                const allalltime = time.ServerTime

                const users = await userdocumentSchema.countDocuments({
                    guildId
                })

                let averagedaily = (alldaily / users)
                let dailyround = Math.round(averagedaily * 10) / 10

                let averageweekly = (allweekly / users)
                let weeklyround = Math.round(averageweekly * 10) / 10

                let averagemonthly = (allmonthly / users)
                let monthround = Math.round(averagemonthly * 10) / 10

                let averageall = (allalltime / users)
                let allround = Math.round(averageall * 10) / 10

                let reply = `<a:arrowpink:896400739520372777>**${roundeddaily}** hours today (*average: ${dailyround}*)\n <a:arrowpink:896400739520372777> **${roundedweekly}** hours this week (*average: ${weeklyround}*)\n <a:arrowpink:896400739520372777> **${roundedmonthly}** hours this month (*average: ${monthround}*)\n <a:arrowpink:896400739520372777> **${roundedalltime}** hours all-time (*average: ${allround}*)`
                let logembed = new MessageEmbed()
                    .setTitle(`⏰ Your study time`)
                    .setColor('#FDF9F9')
                    .setDescription(`${reply}`)
                    .setFooter(`Study time for: ${interaction.member.username} \n by @Friendly_Bot`)
                    .setTimestamp()

                await interaction.reply({ embeds: [logembed] });
            }
        }

    } else return await interaction.reply(`This feature is diabled for this server!! For more use **/info**`);


}

async function Report(interaction) {
    const rep = interaction.options.getString("report-feature");
    const App = interaction.options.getString("appreciate");
    const guild = interaction.guild
    const Main = interaction.client.channels.cache.get("896418168359251979");

    Main.send(`**${guild.name} \n **Report: ${rep && App}** \n By- **${interaction.member.username}**`);

    await interaction.reply({ content: 'Sent to our devs!!', ephemeral: true });
}
// S3 and S1
async function Schedule(interaction) {
    const GG = interaction.guild.id
    const Scheul = interaction.options.getString("tasks");
    const Icon = interaction.guild.iconURL()
    const D1 = await S1.find({
        GuildID: GG,
        Schedule: "YES"
    })
    if (D1) {
        const { MessageEmbed } = require("discord.js");
        const Embed = new MessageEmbed()
            .setTitle(`${interaction.member.username} **Here is your today's schedule.** `)
            .setDescription(Scheul)
            .setColor("RANDOM")
            .setThumbnail("https://pub-static.fotor.com/assets/projects/pages/b3c7feb9-9fac-4c26-8a58-95807231d8ce/vintage-yellow-schedule-book-269d689b-cdb0-4421-8f72-f253469f62d9.jpg")
            .setTimestamp()
            .setFooter({
                text: "FriendlyBot",
                iconURL: Icon,
            })
        // We check if the feature is registered for server and if registered we check for the selected channel or paste the schedule in the same channel as default config!!   
        const F1 = await S3.find({
            GG,
        })
        if (F1) {
            for (tt of F1) {
                const Chan = tt.Schedulechan
                const SC = interaction.client.channels.cache.get(Chan)
                if (!SC) {
                    const AA = await interaction.reply({ embeds: [Embed] });
                    AA.react("🍀")
                    AA.react("📑")
                } else {
                    await interaction.reply({ content: "Schedule posted!!", ephemeral: true });

                    const AF = await SC.send({ embeds: [Embed] });
                    AF.react("🍀")
                    AF.react("📑")
                }
            }
        }
        const AA = await interaction.reply({ embeds: [Embed] });
        AA.react("🍀")
        AA.react("📑")
    } else return await interaction.reply(`This feature is disabled for the server!! For more type **/info**`);

}

async function CustomCmd(interaction) {
    const CMD = interaction.options.getString("cmd-info");
    const DEVChannel = interaction.client.channels.cache.get("810743974112657478");
    const Channel = interaction.channel.id
    const GG = interaction.guild
    const user = interaction.member
    await interaction.reply({ content: `Sent to team for approval!!`, ephemeral: true });

    await DEVChannel.send(`New Request 📨 \n From ${GG.name} || ${GG.id} \n By- ${user.id} || ${user.username} \n ${CMD} \n\n ${Channel}`);

}

async function Dashbaord(interaction) {
    await interaction.reply("This feature is under development!! Try again later");
}

module.exports = {
    help,
    SetupBday,
    SetupDisable,
    SetupEnable,
    SetupForest,
    SetupPrefix,
    SetupSchedule,
    SetupStats,
    SetupVcStudy,
    SetupWelcome,
    BdayAdd,
    BdayList,
    Bdayhelp,
    Warning,
    WarningStats,
    ServerInvites,
    Ping,
    Quote,
    Dashbaord,
    CustomCmd,
    Schedule,
    Report,
    StudyTime,
    ForestCode,
    ForestHelp,
    TODOADD,
    TODODONE,
    TODOREMOVE,
    TODORESET,
    TODOSCORE,
    TODOLIST,
    TicketClose,
    TicketOpen,
    Purge
}