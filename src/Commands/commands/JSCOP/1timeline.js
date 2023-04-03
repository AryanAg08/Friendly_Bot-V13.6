module.exports = {
    commands: ["I2"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["1088582075763925053"],
   callback: async (message) => {
          const { MessageEmbed } = require("discord.js");

          const Embed = new MessageEmbed()
          .setColor("AQUA")
          .setTitle("Timeline⏰")
          .setDescription(`
          **__CODE OF DUTY__** 's Timeline will be as follows: 
          
          > Registration :scroll::  <t:1680460200:F>
          
          > Idea Submission :thought_balloon:: <t:1680460200:F>
          
          > Registration/ Idea Submission Ends: <t:1681230600:F>
          
          > Idea Pitch :bookmark_tabs:: <t:1681270200:F>
          
          > Coding Period Starts :computer:: <t:1681324200:F>
          
          > Mid Evaluation Round :man_teacher:: <t:1681453800:F> to <t:1681461000:F>
          
          > Coding Period Ends: <t:1681497000:F> 
          
          > Final Evaluation Round :hourglass:: <t:1681619400:F> to <t:1681626600:F> \n\n For more info ping <@&1092549050236149830>`)


          message.channel.send({
            content: "@everyone \nGreetings from Organising Team 🎉",
            embeds: [Embed]
          });
   }
}