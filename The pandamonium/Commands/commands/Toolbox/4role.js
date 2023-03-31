module.exports = {
    commands: ["t4"],
    minArgs: 0,
    callback: async (message) => {
        const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
        const code30 = "GM0030"
        const code31 = "WT0040"
        const code32 = "SG0041"
        const code33 = "FR0042"
        const code34 = "RD0043"
       
        const TRY = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId(code30)
            .setStyle("PRIMARY")
            .setEmoji("🎮")
            .setLabel("Gamers"),

            new MessageButton()
            .setCustomId(code31)
            .setStyle("PRIMARY")
            .setEmoji("📺")
            .setLabel("Watchers"),

            new MessageButton()
            .setCustomId(code32)
            .setStyle("PRIMARY")
            .setEmoji("📚")
            .setLabel("Study Group"),

            new MessageButton()
            .setCustomId(code33)
            .setStyle("PRIMARY")
            .setEmoji("🌴")
            .setLabel("Forest"),
            
            new MessageButton()
            .setCustomId(code34)
            .setStyle("PRIMARY")
            .setEmoji("✍")
            .setLabel("Rumple Diary"),

        )

        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Pandamonium Corner")
        .addFields(
            {
                name: `Choose the roles:`, value: ` 
                <:1_:801441662252482600> Gamers 🎮 \n <:2_:801441662798266399> Watchers (Sub Only) 🍿 \n <:3_:801441662920425512> StudyGroup 👨🏾‍🤝‍👨🏼 \n <:4_:801441663397396510> Forest 🎄 \n <:5_:801441662659592202> Rumple Dairy ✍  (Sub Only) 
                        
                Feel free to choose multiple options, choose a single option or choose none. It is all up to you!!
                
                **Note: You'll recieve notifications on every role mentioned above when used by someone in respective channels!!**`
            }
        )

        message.channel.send({ components: [TRY], embeds: [Embed]});
    },
}