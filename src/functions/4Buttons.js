const { MessageEmbed } = require("discord.js");
 
async function help1 (interaction) {
     const HeLp1 = new MessageEmbed()
     .setTimestamp()
     .setColor("AQUA")
     .setTitle("Setup HelpDesk")
     .addFields(
      {name: "stats",value: "Display your total members and Bots count in a fancy way!! \n `/setup stats`"},
      {name: "support", value: "setup your ticket category for server support channels! \n `/setup support`"},
      {name: "deadline", value: "Setup deadline Feature in your server!! `/setup deadline`"},
      {name: "schedule", value: "`/setup schedule`"},
      {name: "vc-study", value: "Setup voice channels study time count for your server!! \n `/setup vc-study`"},
      {name: "forest", value: "Setup Forest app interaction!! \n `/setup forest-session`"},
      {name: "bday", value: "Birthday Module in your server!! \n `/setup bday`"},
      {name: "prefix", value: "Set prefix for the message commands! Default is **!** \n /setup prefix"},
      {name: "welcome", value: "Setup welcome role and messages for your server! \n `/setup welcome`"},
     )

     await interaction.reply({
      embeds: [HeLp1],
     });
     
}


async function help2 (interaction) {

}


module.exports = { 
    help1,
    help2,
}