async function Join_to_create (interaction) {
   const GG = interaction.guild.id
   const Type = interaction.options.getString('type')
   const cat = interaction.options.getChannel('category')
   const guild = interaction.guild;
   let Category;
  const V1 = require("../models/3server-registered");
  const V2 = require("../models/18Private_channels");

   if (Type === "VOICE") {  
     if (cat) {
        const CatCheck = guild.channels.cache.find(channel => channel.type === "GUILD_CATEGORY" && channel.id === `${cat.id}`)
        if (CatCheck) {
            Category = cat.id;
        }
        else return await interaction.reply(`Please specify a category!! \n Try again :(`);
     }
     else {
       await guild.channels.create("--Private-Voice--", {
        type: "GUILD_CATEGORY",
       })
       const CAAT = guild.channels.cache.find(catt => catt.name === "--Private-Voice--" && catt.type === "GUILD_CATEGORY").id
       Category = CAAT;
     }

     await guild.channels.create("Join-To-Create", {
      type: "GUILD_VOICE",
     })
     .then(async vc => {
      vc.setParent(Category);
      const ID = vc.id;


      const B1 = await V1.findOneAndUpdate({
        GuildID: GG,
       },{
        PrivateChannel: "YES",
       },{
        upsert: true,
        new: true,
       }); 
       const B2 = await V2.findOneAndUpdate({
        GG: GG,
        user: "anon",
       },{
        user: "anon",
        Category: Category,
        Type: "VOICE",
        JoinV: ID,
       },{
        upsert: true,
        new: true,
       });
       console.log(B1, B2);
     })
     
       // save it to mongo
       
   }
   if (Type === "BOTH") {
    if (cat) {
        const CatCheck = guild.channels.cache.find(channel => channel.type === "GUILD_CATEGORY" && channel.id === `${cat.id}`)
        if (CatCheck) {
            Category = cat.id;
        }
        else return await interaction.reply(`Please specify a category!! \n Try again :(`);
     }
     else {
       await guild.channels.create("--Private-Voice--", {
        type: "GUILD_CATEGORY",
       })
       const CAAT = guild.channels.cache.find(catt => catt.name === "--Private-Voice--" && catt.type === "GUILD_CATEGORY").id
       Category = CAAT;
     }

     await guild.channels.create("Join-To-Create", {
      type: "GUILD_VOICE",
     })
     .then(async vc => {
        vc.setParent(Category);
        const Id = vc.id

        const B1 = await V1.findOneAndUpdate({
          GuildID: GG,
         },{
          PrivateChannel: "YES",
         },{
          upsert: true,
          new: true,
         }); 
         const B2 = await V2.findOneAndUpdate({
          GG: GG,
          user: "anon",
         },{
          user: "anon",
          Category: Category,
          Type: "BOTH",
          JoinV: Id,
         },{
          upsert: true,
          new: true,
         });
         console.log(B1, B2);

     })
     // Save it in mongo
    
   }

   await interaction.reply("Private Voice Channel setup done!! ✅")
}

async function Make_ONLY_VOICE_Channel (user, Guild, Category) {
     const J1 = require("../models/3server-registered");
     const J2 = require("../models/18Private_channels");
     const GG = Guild.id
     const User = user.id

  let chname = "${user}'s Call";

    

   const O1 = await J1.find({
    GuildID: GG,
    PrivateChannel: "YES",
  })
  if (O1) {
    const O2 = await J2.findOneAndUpdate({
      GG: GG,
      user: "anon",
    },{
      user: "anon",
      $inc: {
        CallNo: 1,
      },
    },{
      upsert: true,
      new: true,
    })
    .exec()

    await Guild.channels.create(String(chname.replace("${user}", user.member.user.username)), {
      type: "GUILD_VOICE",
    }).then (async vc => {
        //  const N1 = await J2.find({
        //   GG,
        //   user: "anon",
        //  })
        //  for (tt of N1) {
        //   const cat = tt.Category;

          vc.setParent(Category).then( async (settedParent) => {
            settedParent.permissionOverwrites.edit(user.member.user, {
              VIEW_CHANNEL: true, CONNECT: true,
            });
            vc.setUserLimit(10);
            user.setChannel(vc);

            const N2 = await J2.findOneAndUpdate({
              GG,
              user: User,
            },{
              user: User,
              VC: vc.id,
            },{
              upsert: true,
              new: true,
            });

          });
         } 
    // });
    )
  //}
   
}
}
async function CREATE_BOTH_CHANNELS (user, Guild, Category) {
  const J1 = require("../models/3server-registered");
  const J2 = require("../models/18Private_channels");
  const GG = Guild.id
  const User = user.id

let chname = "${user}'s Call";

 

const O1 = await J1.find({
 GuildID: GG,
 PrivateChannel: "YES",
})
if (O1) {
 const O2 = await J2.findOneAndUpdate({
   GG: GG,
   user: "anon",
 },{
   user: "anon",
   $inc: {
     CallNo: 1,
   },
 },{
   upsert: true,
   new: true,
 })
 .exec()

 await Guild.channels.create(String(chname.replace("${user}", user.member.user.username)), {
   type: "GUILD_VOICE",
 }).then (async vc => {
      // const N1 = await J2.find({
      //  GG,
      //  user: "anon",
      // })
      // for (tt of N1) {
      //  const cat = tt.Category;

       vc.setParent(Category).then( async (settedParent) => {
         settedParent.permissionOverwrites.edit(user.member.user, {
           VIEW_CHANNEL: true, CONNECT: true,
         });
         vc.setUserLimit(10);
         user.setChannel(vc);

         const N2 = await J2.findOneAndUpdate({
           GG,
           user: User,
         },{
           user: User,
           VC: vc.id,
         },{
           upsert: true,
           new: true,
         });

       });
     // } 
 });

 await Guild.channels.create(String(chname.replace("${user}", user.member.user.username)), {
  type: "GUILD_TEXT",
}).then (async vc => {
    //  const N1 = await J2.find({
    //   GG,
    //   user: "anon",
    //  })
    //  for (tt of N1) {
    //   const cat = tt.Category;

      vc.setParent(Category).then( async (settedParent) => {
        settedParent.permissionOverwrites.edit(user.member.user, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
          READ_MESSAGE_HISTORY: true,
        });

        const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
           const embed = new MessageEmbed()
           .setColor("RANDOM")
           .setDescription(`Welcome **${user.member.user.username}** to the voice channel`)
           
           const row = new MessageActionRow()
            .addComponents(
              new MessageButton()
              .setCustomId(`PVC${user.id}`)
              .setLabel("Close")
              .setEmoji("❌")
              .setStyle("DANGER"),
               
              new MessageButton()
              .setCustomId(`PV${GG}`)
              .setStyle("PRIMARY")
              .setLabel(`${Guild.name}`)
              .setDisabled(true)
            )

            vc.send({
              embeds: [embed],
              components: [row],
            });
            
        const N2 = await J2.findOneAndUpdate({
          GG,
          user: User,
        },{
          user: User,
          TC: vc.id,
        },{
          upsert: true,
          new: true,
        });

      });
    // } 
});

}
}

async function ModVCCLose(interaction) {
      const O1 = require("../models/3server-registered");
      const O2 = require("../models/18Private_channels");

      const GG = interaction.guild.id
      
      const G1 = await O1.find({
        GuildID: GG,
        PrivateChannel: "YES"
      })

      if (G1) {
        const L1 = await O2.find({
          GG: GG,
          TC: interaction.channel.id
        })
        if (L1) {
          for (ii of L1) {
            const VCC = ii.VC;

            const VCChan = interaction.guild.channels.cache.get(VCC);

            VCChan.delete();
            interaction.channel.delete();
          }
        } else {
          return;
        }
      } else return;
}

module.exports = {
    Join_to_create,
    CREATE_BOTH_CHANNELS,
    Make_ONLY_VOICE_Channel,
    ModVCCLose,
}