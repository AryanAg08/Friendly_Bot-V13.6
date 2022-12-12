async function BotCount_chan(interaction) {
  const J1 = require("../models/3server-registered");
  const J2 = require("../models/17Bot-counting");

  const GG = interaction.guild.id
  const user = "anon"
  const chann = interaction.options.getChannel("countchannel");

  const K1 = await J1.findOneAndUpdate({
    GuildID: GG,
  },{
    GuildID: GG,
    BotCount: "YES",
  },{
    upsert: true,
    new: true,
  })

  const K2 = await J2.findOneAndUpdate({
    GG,
    user,
  },{
    user,
    CHAN: chann.id,
  },{
    upsert: true,
    new: true,
  })

  await interaction.reply(`<#${chann.id}> has been set for bot_counting!! \n Counting will start in some Time!!!!`);

  const channel = interaction.client.channels.cache.get(chann.id);
   
  const HJ = await channel.send("1");
  HJ.react("✅");

  // Add this count to database for the particular sever!! And proceed with the same!!

  const H1 = await J2.findOneAndUpdate({
    GG,
    user,
  },{
    user,
    CurrentCount: 1,
    NextCount: 2,
    LastCountUser: "BOT",
  },{
    upsert: true,
    new: true,
  });
  console.log(H1);
}

async function Count_goodies(interaction) {
  const J2 = require("../models/17Bot-counting");

  const Z1 = await J2.findOneAndUpdate({
    GG: interaction.guild.id,
    user: "anon",
  },{
    user: "anon",
    Goodies: "YES",
  },{
    upsert: true,
    new: true,
  })

  await interaction.reply(`Goodies have been attached with the counting!!`);
}

module.exports = {
    BotCount_chan,
    Count_goodies,
}