const A1 = require("../models/24daily");
const A2 = require("../models/3server-registered");

async function Daily_module (client) {
   const { MessageEmbed } = require("discord.js");
    const today = require("today-word");

  const word = await today.getWord();

  const Name = word.word
  const pronounce = word.pronunciation
  const audio = word.audio
  const POS = word.pos
  const Meaning = word.meaning
  const Origin = word.origin
  const example = word.examples

  const embed = new MessageEmbed()
  .setTitle("Word of the day!!")
  .setTimestamp()
  .setFooter({
    iconURL: `${client.bot.user.avatar_url}`,
    text: `: By Friendly Bot`
  })
  .addFields(
    {name: "Word:", value: `**${Name}**`},
    { name: "Pronounciation: ", value: `${pronounce}`},
    {name: "Related audio link:", value: `${audio}`},
    {name: "Part of speech:", value: `${POS}`},
    {name: "Meaning: ", value: `${Meaning}`},
    {name: "Origin:", value: `${Origin}`},
    {name: "Examples:", value: `${example}`}
  )

  const C1 = await A2.find({
    Daily: "YES",
  })
  if (C1) {
    for (qq of C1) {
        const GG = qq.GuildID

        const C2 = await A1.find({
            GG: GG,
            user: "anon",
        })
        if (C2) {
            for (ii of C2) {
                const chann = ii.channel

                const chan = client.channels.cache.get(chann);

                await chan.send({
                    embeds: [embed],
                });
            }
        } return;
    }
  } return;

  
}

async function daily (interaction) {
 const channel = interaction.options.getChannel("channel").id

 const checkchan = interaction.guild.channels.cache.fetch(ch => ch.type === "GUILD_TEXT" && ch.id === channel)
   if (checkchan) {
    const B1 = await A2.findOneAndUpdate({
        GuildID: interaction.guild.id,
    },{
        GuildID: interaction.guild.id,
        Daily: "YES",
    },{
        upsert: true,
        new: true,
    });

    const B2 = await A1.findOneAndUpdate({
        GG: interaction.guild.id,
        user: "anon",
    },{
        user: "anon",
        channel: channel,
    },{
        upsert: true,
        new: true,
    });

    await interaction.reply(`Setup done fordaily words. \n New words daily will be displayed in <#${channel}>`);

   } 
   else return await interaction.reply("please check the requested channel is a text channel!!");

}


module.exports = {
    daily,
    Daily_module
}