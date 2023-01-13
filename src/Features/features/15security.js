const A1 = require("../../models/3server-registered");
const B1 = require("../../models/23Security");

module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
     
        if (interaction.isSelectMenu()) {
            await interaction.deferUpdate();
            const value = interaction.values;
            const guild = interaction.guild;

            //Codes for usage
            const code1 = "INVITELINKS"
            const code2 = "WORDSPING"
            const code3 = "EVERYONEPING"


            if (value.includes(code1)) {
               const A2 = await A1.findOneAndUpdate({
                GuildID: guild.id,
               },{
                GuildID: guild.id,
                Security: "YES",
               },{
                upsert: true,
                new: true,
               });
               
               const B2 = await B1.findOneAndUpdate({
                GG: guild.id,
                user: "anon",
               },{
                user: "anon",
                InviteLinks: "YES",
                LogChannel: interaction.guild.systemChannelId,
               },{
                upsert: true,
                new: true,
               });

               await interaction.reply("Added Protection against spam Invite Links!!");
            }

            if (value.includes(code2)) {
                const A3 = await A1.findOneAndUpdate({
                    GuildID: guild.id,
                   },{
                    GuildID: guild.id,
                    Security: "YES",
                   },{
                    upsert: true,
                    new: true,
                   });

                   const B3 = await B1.findOneAndUpdate({
                    GG: guild.id,
                    user: "anon",
                   },{
                    user: "anon",
                    BadWords: "YES",
                    LogChannel: interaction.guild.systemChannelId,
                   },{
                    upsert: true,
                    new: true,
                   });  

                   await interaction.reply("Added security against wrong words!! \n To check words that are considered bad use /spam wordlist");
            }

            if (value.includes(code3)) {
                const A4 = await A1.findOneAndUpdate({
                    GuildID: guild.id,
                   },{
                    GuildID: guild.id,
                    Security: "YES",
                   },{
                    upsert: true,
                    new: true,
                   });

                   const B4 = await B1.findOneAndUpdate({
                    GG: guild.id,
                    user: "anon",
                   },{
                    user: "anon",
                    EveryonePing: "YES",
                    LogChannel: interaction.guild.systemChannelId,
                   },{
                    upsert: true,
                    new: true,
                   });  

                   await interaction.reply("Enabled security against @ everyone spams!! \n **NOTE: ONLY MEMBERS HAVING BAN_MEMBERS PERMISSIONS WILL BE ALLOWED TO USE THE EVERYONE PING!!**");
            }
        }
    });

    client.on("messageCreate", async message => {
      if (message.channel.type === "DM") return;
      else {
        const {
            member,
            content,
            guild,
            channel,
            systemChannelId
         } = message;
         const word =  content.toLowerCase()
          console.log(word);
         const A5 = await A1.find({
            GuildID: guild.id,
            Security: "YES",
         })

         if (A5) {
            const B5 = await B1.find({
                GG: guild.id,
                user: "anon",
            })

            if (B5) {
                for (ww of B5) {
                    const count = ww.Count
                    const Words = ww.BadWords
                    const Ping = ww.EveryonePing
                    const Invite = ww.InviteLinks
                    
                    if (Words === "YES") {
                          // console.log()
                    }

                }
            }
         }

      }
    })
}