const S1 = require("../models/3server-registered");
const V1 = require("../models/15Verification");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

async function Verification (interaction) {
    const VL = interaction.options.getString('level');
    const GG = interaction.guild.id
    
    if (VL === "easy") {
        const rules = `<#${interaction.guild.rulesChannelId}>` || "rules"
        const reply = `Welcome to the **${interaction.guild.name}**. \n To get verified please read the ${rules} channel and click on the verify button below`;
        const roleVerified = interaction.options.getRole("setverifiedrole").id;
           
        const embed =  new MessageEmbed()
        .setColor("AQUA")
        .setDescription(reply)
        .setThumbnail(interaction.guild.iconURL)
        .setFooter({
            text: `${interaction.guild.name}`
        }) 
        
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId("VERIIFICATIONEASY")
            .setLabel("Verfiy")
            .setEmoji("✅")
        )

        await interaction.channel.send({ 
            embeds: [embed],
            components: [row]
        });

        await interaction.reply("Verification setup done!!")
        
        const H1 = await V1.findOneAndUpdate({
          GG: interaction.guild.id,
          user: "anon",
        },{
            user: "anon",
            VerificationLevel: "EASY",
            VerificationRole: `${roleVerified}`,
        },{
            upsert: true,
            new: true,
        })
        
        const H2 = await S1.findOneAndUpdate({
            GuildID: interaction.guild.id,
        },{
            GuildID: interaction.guild.id,
            Verification: "YES",
        },{
            upsert: true,
            new: true,
        });
    }

    if (VL === "medium") {
    const chan = interaction.channel.id
    const role = interaction.options.getRole('setverifiedrole').id  

    const A11 = await V1.findOneAndUpdate({
        GG: interaction.guild.id,
        user: "anon",
    },{
        user: "anon",
        VerificationLevel: "MEDIUM",
        VerificationChan: chan,
        VerificationRole: role,
        VRFNMSG: "Verify!",
    },{
      upsert: true,
      new: true,
    })

    const GG2 = await S1.findOneAndUpdate({
        GuildID: interaction.guild.id,
    },{
        GuildID: interaction.guild.id,
        Verification: "YES",
    },{
        upsert: true,
        new: true,
    }) 

    await interaction.reply(`Verification has been set up in <#${chan}> !!`);
    interaction.channel.send(`For users to verify they have to send **Verify!** in <#${chan}>!!`);
    }

    if (VL === "hard") {
        const guild = interaction.guild.id;
        const chan = interaction.channel.id;
        const role = interaction.options.getRole('setverifiedrole').id;
        const Chan = interaction.options.getChannel('setverificationchannel').id;
              var Channel;
        if (Chan) {
            var Channel = Chan;
        } else {
            var Channel = chan;
        } 

        const Ag = await V1.findOneAndUpdate({
            GG: guild,
            user: "anon",
        },{
            user: "anon",
            VerificationLevel: "HARD",
            VerificationRole: role,
            VerificationChan: chan,
            VerificationMsgchannel: Channel,
        },{
            upsert: true,
            new: true,
        })

        const AG = await S1.findOneAndUpdate({
            GuildID: guild,
        },{
            GuildID: guild,
            Verification: "YES",
        },{
            upsert: true,
            new: true,
        })

        await interaction.reply(`Verification hard level set up done ✅ \n <#${chan}> is the channel for new users to send their verification message!! \n <#${Channel}> is channel for Moderators/Admins to verify users!! \n\n Set permissions accordingly you want!!`);
    }
}

module.exports = {
    Verification
}