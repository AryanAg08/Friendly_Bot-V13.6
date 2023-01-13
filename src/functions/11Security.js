async function security (interaction) {
       const { MessageActionRow, MessageSelectMenu } = require("discord.js");

       const code1 = "INVITELINKS"
       const code2 = "WORDSPING"
       const code3 = "EVERYONEPING"

       const rows = new MessageActionRow()
       .addComponents(
        new MessageSelectMenu()
           .setCustomId("Server Security")
           .setMinValues(1)
           .setPlaceholder("Choose the security option: ")
           .addOptions([
            {
                label: 'Invite Links',
                value: code1,
                description: "Prevents others to spam Invite Links!!",
                emoji: '<:1_:801441662252482600>'
            },
            {
                label: 'Wrong Words!!',
                value: code2,
                description: "Prevents wrong words and deletes them asap!!",
                emoji: '<:2_:801441662798266399>',
            },
            {
                label:  "Everyone Ping!!",
                value: code3,
                description: "Prevents users to spam everyone ping other than members having 'BAN_MEMBERS' permissions.",
                emoji: '<:3_:801441662920425512>',
            }
           ])
       )

       await interaction.reply({
        content: "Select the appropiate options:",
        components: [rows]
       })
}


module.exports = {
    security, 
}