module.exports = {
    commands: ["showtimers"],
    minArgs: 0,
    chane: ["1010214273986859049"],
    callback: async (message) => {
        const HGF = require("../../../Schemas/1timer");
        const GG = message.guild.id
        const { MessageEmbed } = require("discord.js");
        const Gerfg = await HGF.find({
            GG
        });
        var Timers = "Server Timers: \n\n"
        if (Gerfg && Gerfg.length > 0) {
             for (rr of Gerfg) {
                Timers += `<a:Arrow:862279551698993162> <@${rr.user}>'s Timer ${rr.TimeStamp} - ${rr.Text} \n`
             }
            }else {
                Timers += "no timers ongoing!!"
            }

             const Embed = new MessageEmbed()
             .setColor('RANDOM')
             .setDescription(Timers)
             
             message.channel.send({embeds: [Embed]});
           
    }
}