const S1 = require("../models/3server-registered");
const V1 = require("../models/15Verification");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

async function Verification (interaction) {
    const VL = interaction.options.getString('level');
    const GG = interaction.guild.id
    
    if (VL === "easy") {
        const rules = `<#${interaction.guild.rulesChannelId}>` || "rules"
        const reply = `Welcome to the **${interaction.guild.name}**. \n To get verified please read the ${rules} channel and click on the verify button below`;
        const roleVerified = interaction.options.getRole("setVerifiedRole").id;
           
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
    }

    if (VL === "medium") {

    }

    if (VL === "hard") {
        const guild = interaction.guild
        
    }
}

module.exports = {
    Verification
}