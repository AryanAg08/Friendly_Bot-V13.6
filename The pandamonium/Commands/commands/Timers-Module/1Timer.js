module.exports = {
        commands: ["timer"],
        minArgs: 0,
        chane: ["1010214273986859049"],
        callback: async (message, arguments, text) => {
            const { guild, author, channel } = message
           //  const chann = ""  // 732292791287283862
             const ms = require("ms");
             const moment = require("moment");
             const GG = guild.id
             const user = author.id
             const Tiers = require("../../../Schemas/1timer");

             const timer = arguments[0]
             const check = timer.split(/(?!$)/u)
             const tr = check.slice(-1)[0] 
              if (tr === "m" || tr === "h") {
                   const timeChose = ms(timer)
                   let starttime = new Date(Date.now());
                   let endtime = new Date(starttime.getTime() + timeChose);
                   let structuretime = moment(endtime).format('DD/MM/YYYY-HH:mm');
                   const Timers = structuretime
                   let TimeStamp = `<t:${Math.floor( new Date(endtime).getTime() /1000)}:F>`
                   let tagalong = arguments.slice(1).join(" ") || "timer finished!!"
                   const Text = tagalong
                   const input = {
                        GG,
                        user,
                        Timers,
                        Text,
                        TimeStamp,
                   }
                   const D2 =  await new Tiers(input).save()

                   channel.send(`Timer started ⌛!! ${TimeStamp} ${tagalong}`);


            
                         } else return message.reply 
         },
}