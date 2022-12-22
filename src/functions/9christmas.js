async function wish (interaction) {
    const receiver = interaction.options.getUser("username").id
    const text1 = interaction.options.getString("message")
    const selected = interaction.options.getString('gifttype');

    const GGuild = interaction.guild.id
    const user = interaction.member.id
    const Aa = require("../models/20Candies");
    const Ba = require("../models/21Wishes");

    if (selected === "GIFT") {
        const DD = await Ba.findOneAndUpdate(
          {
              GGuild,
              user: "anon2"
          },
          {
            user: "anon2",
              $inc: {
                  wishnumber: 1,
              },
          },
          {
              upsert: true,
              new: true,
          }
      )
      .exec()
     const A1 = await Aa.findOneAndUpdate({
  GGuild,
    user,}
,{
user,
$inc:{
candies: -95,}
},{
upsert: true,
new: true,}
)
console.log(A1)

const item = "gift"
const wish = text1

const result = await Ba.findOne({
            GGuild,
            user: "anon2",
        })


        if (result) {
            let wishno = await result.wishnumber
            const wishnumber = wishno
console.log(`${wish} for ${receiver} candies use: ${item}`)
const A2 = await Ba.findOneAndUpdate({
GGuild,
user: "anon",
wishnumber, },
{
    user:"anon",
    sender: user,
    receiver,
    wish,
    item,
    wishnumber,
    accept: "no",
  },{
  upsert: true,
  new: true,}
  )
  console.log(A2); 
const chan = interaction.guild.channels.cache.get("997941830396170340")

chan.send(`<@${interaction.member.id}> just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
  interaction.reply({content: "done", ephemeral: true})
  }
  }
    
        if (selected === "ELVES") {
            const DD = await Ba.findOneAndUpdate(
          {
              GGuild,
              user: "anon2"
          },
          {
            user: "anon2",
              $inc: {
                  wishnumber: 1,
              },
          },
          {
              upsert: true,
              new: true,
          }
      )
      .exec()
     const A1 = await Aa.findOneAndUpdate({
  GGuild,
    user,}
,{
user,
$inc:{
candies: -75,}
},{
upsert: true,
new: true,}
)
console.log(A1)

const item = "elves"
const wish = text1

const result = await Ba.findOne({
            GGuild,
            user: "anon2",
        })


        if (result) {
            let wishno = await result.wishnumber
            const wishnumber = wishno
console.log(`${wish} for ${receiver} candies use: ${item}`)
const A2 = await Ba.findOneAndUpdate({
GGuild,
user: "anon",
wishnumber, },
{
    user:"anon",
    sender: user,
    receiver,
    wish,
    item,
    wishnumber,
    accept: "no",
  },{
  upsert: true,
  new: true,}
  )
  console.log(A2); 

const chan = interaction.guild.channels.cache.get("997941830396170340")

chan.send(`<@${interaction.member.id}> just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber}`)
  interaction.reply({content: "done", ephemeral: true})
  }
  }
  
  if (selected === "TREE") {
      const DD = await Ba.findOneAndUpdate(
          {
              GGuild,
              user: "anon2"
          },
          {
            user: "anon2",
              $inc: {
                  wishnumber: 1,
              },
          },
          {
              upsert: true,
              new: true,
          }
      )
      .exec()
     const A1 = await Aa.findOneAndUpdate({
  GGuild,
    user,}
,{
user,
$inc:{
candies: -50,}
},{
upsert: true,
new: true,}
)
console.log(A1)

const item = "tree"
const wish = text1
const result = await Ba.findOne({
            GGuild,
            user: "anon2",
        })


        if (result) {
            let wishno = await result.wishnumber
            const wishnumber = wishno
console.log(`${wish} for ${receiver} candies use: ${item}`)
const A2 = await Ba.findOneAndUpdate({
GGuild,
user: "anon",
 wishnumber, },
{
    user:"anon",
    sender: user,
    receiver,
    wish,
    item,
    wishnumber,
    accept: "no",
  },{
  upsert: true,
  new: true,}
  )
  console.log(A2); 
const chan = interaction.guild.channels.cache.get("997941830396170340")

chan.send(`<@${interaction.member.id}> just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
  interaction.reply({content: "done", ephemeral: true})
  }
  }
  
  if (selected === "SANTA") {
      const DD = await Ba.findOneAndUpdate(
          {
              GGuild,
              user: "anon2"
          },
          {
            user: "anon2",
              $inc: {
                  wishnumber: 1,
              },
          },
          {
              upsert: true,
              new: true,
          }
      )
      .exec()
      
     const A1 = await Aa.findOneAndUpdate({
  GGuild,
    user,}
,{
user,
$inc:{
candies: -125,}
},{
upsert: true,
new: true,}
)
console.log(A1)

const item = "santa"
const wish = text1
const result = await Ba.findOne({
            GGuild,
            user: "anon2",
        })
        if (result) {
            let wishno = await result.wishnumber
            const wishnumber = wishno
console.log(`${wish} for ${receiver} candies use: ${item}`)
const A2 = await Ba.findOneAndUpdate({
GGuild,
user: "anon",
wishnumber, },
{
    user:"anon",
    sender: user,
    receiver,
    wish,
    item,
    wishnumber,
    accept: "no",
  },{
  upsert: true,
  new: true,}
  )
  console.log(A2); 
const chan = interaction.guild.channels.cache.get("997941830396170340")

chan.send(`<@${interaction.member.id}> just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
  interaction.reply({content: "done", ephemeral: true})
  }
  }

}

module.exports = {
    wish
}