async function bookmark (interaction) {
    const user = interaction.member
    var content;
    const Gname = interaction.guild.name

    const message = interaction.options.getNumber("messageid");
     
    const msg = interaction.channel.messages.fetch(message)
    .then(message => content = message.content);

    const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

    const embed = new MessageEmbed()
    .setTimestamp()
    .setDescription(`**Content:**\n ${content}`)


    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("SRVR")
        .setLabel(`${Gname}`)
        .setStyle("PRIMARY")
        .setDisabled(true)
    )

    await user.send({
        embeds: [embed],
        components: [row]
    }).catch(async () => console.log("Can't dm the user!!") && await interaction.reply(`Can't dm you!!`));

    await interaction.reply(`Message bookmarked!!`);
}


module.exports = {
    bookmark
}