module.exports = {
    commands: ["t1"],
    minArgs: 0,
    callback: async (message) => {
        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const code1 = "TH0001"
        const code2 = "SH0002"
        const code3 = "HE0003"
        const code4 = "NO0004"
        const code5 = "OR0005"
        const code6 = "AP0006"
        const code7 = "XE0007"
       
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code1)
            .setStyle("PRIMARY")
            .setLabel("They/Them"),

            new MessageButton()
            .setCustomId(code2)
            .setStyle("PRIMARY")
            .setLabel("She/Her"),

            new MessageButton()
            .setCustomId(code3)
            .setStyle("PRIMARY")
            .setLabel("He/Him"),

            new MessageButton()
            .setCustomId(code4)
            .setStyle("PRIMARY")
            .setLabel("No Pronouns"),
            
            new MessageButton()
            .setCustomId(code5)
            .setStyle("PRIMARY")
            .setLabel("Others"),

        )

        const TRY2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code6)
            .setStyle("PRIMARY")
            .setLabel("Any Pronouns"),

            new MessageButton()
            .setCustomId(code7)
            .setStyle("PRIMARY")
            .setLabel("Xe/Xem"),
        )

        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Pronouns Preference")
        .addFields(
            {
                name: `Specify the preferred pronouns by selecting:`, value: ` 
                <:1_:801441662252482600> they/them \n <:2_:801441662798266399> she/her \n <:3_:801441662920425512> he/him \n <:4_:801441663397396510> no pronouns \n <:5_:801441662659592202> other \n <:6_:801441662957649930> any pronoun \n <:7_:801441662563254294> xe/xem 
                        
                Feel free to choose multiple options, choose a single option or choose none. It is all up to you!!`
            }
        )

        message.channel.send({ components: [TRY, TRY2], embeds: [Embed]});
    },
}