const P1 = require("../models/27Poms");
const P2 = require("../models/28Pom-User");
const P3 = require("../models/3server-registered");

async function CreatePom(interaction) {
    const GG = interaction.guild.id
    const user = interaction.user.id
    const SesRec = interaction.options.getNumber("session-count");
    const SessTime = interaction.options.getNumber("session-time");
    const BreakTime = interaction.options.getNumber("break-time"); 
    const RoleName = `${interaction.user.username}'s Pom 🍅` 

    const PP4 = await P3.find({
        GuildID: GG,
        POM: "YES",
    })

    if (PP4) {
        await interaction.guild.roles.create({
            name: RoleName,
            color: "RED",
            reason: "Pom-session created by " + interaction.user.username,
        })
         try {
        const RID = interaction.guild.roles.cache.find(role => role.name === RoleName).id
           const PP1 = await P2.find({
            GG,
            user: "anon",
           })

           if (PP1) {
            for (pp of PP1) {
                const Chan = pp.POMCHANNEL
                const POMROLE = pp.POMROLE

                const { MessageEmbed } = require("discord.js");
                const TTT = "`10 minutes`"
                const DESC = `About Pomodoro -> Follow this link `
                const desc = `New Pom Session Starting in ${TTT} 🍅: \n\n ✅ Host: **${interaction.user.username}** \n\n ▪️ Session Time ⌚: ${SessTime} minutes \n\n ▪️ Break Time ⏱️: ${BreakTime} minutes \n\n ▪️ Total Sessions 🔢: ${SesRec} `
                const embed = new MessageEmbed()
                .setColor("DARK_RED")
                .setFooter({
                    text: "-by Friendly_Bot"
                })
                .setDescription(desc)
                    
                if (Chan === undefined) 
                return await interaction.reply('Finding channel error!! contact Admins!!');

                if (POMROLE === undefined) 
                  {
                
                  }

                  await interaction.reply({
                    embeds: [embed],
                  })
            }
           }
            
         } 
         catch (err) {
            await interaction.reply("cannot create your pom session!!" + `\n ${err}`);
         }
         
        
    }
    
    else return await interaction.reply(`This module has been disabled for your sever!! \n Contact your admins.`);


    
}


async function SetupPom (interaction) {
    const GG = interaction.guild.id
    const user = "anon"
    const channel = interaction.options.getChannel("pom-channel")
    const Role = interaction.options.getRole("pom-role")

    try { 
        const CheckRole = interaction.guild.roles.cache.find(role => role.id === Role.id)

        if (CheckRole) {
            if (channel.type === "GUILD_TEXT") {
                const T1 = await P2.findOneAndUpdate({
                    GG,
                    user,
                },
                {
                    user,
                    POMCHANNEL: channel.id,
                    POMROLE: Role.id,
                },{
                    upsert: true,
                    new: true,
                });
        
                const T2 = await P3.findOneAndUpdate({
                    GuildID: GG,
                },{
                    POM: "YES",
                },{
                    upsert: true,
                    new: true,
                })
        
                // saved channel for sending the notification
                
                await interaction.reply("Pom-Session Feature enabled for " + `${interaction.guild.name} ✅`);
        
        }
    }

    else {
        if (channel.type === "GUILD_TEXT") {
            const T1 = await P2.findOneAndUpdate({
                GG,
                user,
            },
            {
                user,
                POMCHANNEL: channel.id,
            },{
                upsert: true,
                new: true,
            });
    
            const T2 = await P3.findOneAndUpdate({
                GuildID: GG,
            },{
                POM: "YES",
            },{
                upsert: true,
                new: true,
            })
    
            // saved channel for sending the notification
            
            await interaction.reply("Pom-Session Feature enabled for " + `${interaction.guild.name} ✅`);
    
    }
  }
}
catch (err) {
     await interaction.reply(err);       
}
}

 module.exports = {
    SetupPom,
    CreatePom,

 }