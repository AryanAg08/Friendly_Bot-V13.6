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
            .setCustomId(`Verification${GG}`)
            .setLabel("Verfiy")
            .setEmoji("✅")
            .setStyle("SECONDARY")
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
    const chan = interaction.options.getChannel("setverificationchannel").id || interaction.channel.id
    const role = interaction.options.getRole('setverifiedrole').id  

    const A11 = await V1.findOneAndUpdate({
        GG: interaction.guild.id,
        user: "anon",
    },{
        user: "anon",
        VerificationLevel: "MEDIUM",
        VerificationChan: chan,
        VerificationRole: role,
        VRFNMSG: "Verify",
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

    const { MessageEmbed } = require("discord.js");
    
    const Em = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Welcome to the ${interaction.guild.name}!! \n To get verified Type **Verify** here in <#${chan}>`)
    .setTimestamp()
    .setFooter({
        text: `${interaction.guild.name}`,
        iconURL: `${interaction.guild.iconURL()}`
    })

    await interaction.reply(`Verification has been set up in <#${chan}> !!`);
    await interaction.channel.send({ embeds: [Em]});
    }

    if (VL === "hard") {
        const guild = interaction.guild.id;
        const chan = interaction.channel.id;
        const role = interaction.options.getRole('setverifiedrole').id;
        const Chan = interaction.options.getChannel('setverificationchannel').id;
              var Channel;
        if (Chan) {
             Channel = Chan;
        } else {
            Channel = chan;
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


async function HELP(interaction) {
    const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
      
    const HelpEmbed = new MessageEmbed()
    .setColor("DARK_VIVID_PINK")
    .setTitle("HelpDesk")
    .setTimestamp()
    .addFields(
        { name: "Help Commands", value: "Get info about the commands."},
        { name: "Setup", value: "Customise your server the way you need it."},
        { name: "Study", value: "Get all the required assets for your server regarding study."},
        { name: "Misc", value: "Want to some extra features that makes your server way too awesome.\n check them out."},
        { name: "Dashboard", value: "Get an amazing dashboard for your server members."}
    )

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("HPx001")
        .setLabel("Setup")
        .setStyle("SUCCESS"),

        new MessageButton()
        .setCustomId("HPx002")
        .setLabel("Study")
        .setStyle("SUCCESS"),

        new MessageButton()
        .setCustomId("HPx003")
        .setLabel("Misc")
        .setStyle("SUCCESS"),

        new MessageButton()
        .setCustomId("HPx004")
        .setLabel("Dashboard")
        .setStyle("SUCCESS")

    )


    await interaction.reply({embeds: [HelpEmbed], components: [row]});

}


async function Deadlines(interaction) {
const J1 = require("../models/3server-registered");
const J2 = require("../models/16Deadlines");

const GG = interaction.guild.id
const user = interaction.member.id
const Channel = interaction.options.getChannel("deadline-channel");
const Role = interaction.options.getRole("deadline-role");

const M1 = await J1.findOneAndUpdate({
    GuildID: GG,
},{
    GuildID: GG,
    Deadline: "YES",
},{
    upsert: true,
    new: true,
});

if (Channel) {
  const DChan = Channel.id
  
  const M2 = await J2.findOneAndUpdate({
    GG,
    user: "anon",
  },{
    user: "anon",
    ChannelID: DChan,
  },{
    upsert: true,
    new: true,
  });

  console.log(`Setup channel completed for ${DChan}`);
}
else {
    const chan = interaction.channel.id;

    const M3 = await J2.findOneAndUpdate({
        GG,
        user: "anon",
      },{
        user: "anon",
        ChannelID: chan,
      },{
        upsert: true,
        new: true,
      });
    
      console.log(`Setup channel completed for ${chan}`);
}

if (Role) {
    const ROLEID = Role.id

    const M4 = await J2.findOneAndUpdate({
        GG,
        user: "anon",
    },{
        user: "anon",
        RoleID: ROLEID,
    },{
        upsert: true,
        new: true,
    });

    console.log(`Setup done for deadline role ${ROLEID}`);
}

await interaction.reply(`Setup done for the ${interaction.guild.name}. \n Deadline Module Active ✅`);
}

module.exports = {
    Verification,
    HELP,
    Deadlines,
}