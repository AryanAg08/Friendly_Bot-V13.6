const { MessageEmbed } = require("discord.js");
const T1 = require("../models/25timers");

async function timer (interaction) {
   const time = interaction.options.getNumber("duration");
   const description = interaction.options.getString("timer-description");
   const ms = require("ms")
   const moment = require("moment")
   const GG = interaction.guild.id
   const user = interaction.member.id
   const Channel = interaction.channel.id

   const timechoose = ms(`${time}m`)
   let starttime = new Date(Date.now());
   let endtime = new Date(starttime.getTime() + timechoose);
   let structuretime = moment(endtime).format("DD/MM/YYYY-HH:mm");
   const Timers = structuretime
   let TimeStamp = `<t:${Math.floor( new Date(endtime).getTime() / 1000)}:F>`
   let tagalong;
   if (description) {
    tagalong += description;
   }
   else { 
   tagalong += "Timer End!!";
   } 

   const Text = tagalong

   const input = {
    GG,
    user,
    Timers,
    Text,
    TimeStamp,
    Channel,
   }
   const T2 = await new T1(input).save()

   const embed = new MessageEmbed()
   .setTitle(`${interaction.user.tag}`)
   .setTimestamp()
   .addFields(
    { name: "⏰Timer started!", value: `<@${user}> ${tagalong}`, inline: false},
    {name: "Duration", value: `${time} minutes`, inline: true},
    { name: "Ends", value: `${TimeStamp}`, inline: true},
   )

   await interaction.reply({
    embeds: [embed],
   });

}

async function showtimer (interaction) {
    const GG = interaction.guild.id

    const T3 = await T1.find({
        GG,
    })
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

             await interaction.reply({
                embeds: [Embed],
             });
}


module.exports = {
    timer,
    showtimer
}