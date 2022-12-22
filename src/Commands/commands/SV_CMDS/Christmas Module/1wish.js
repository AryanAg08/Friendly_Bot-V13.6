module.exports = {
	commands: "wish",
	minArgs: 1,
	callback: async (message, arguments, text) => { 
        if (message.guild.id === "703937875720273972") {
		let selected = arguments[0]
        const text1 = arguments.slice(2).join(' ')
        const Aa = require("../../../../models/20Candies");
       const Ba = require("../../../../models/21Wishes");
        const GGuild = message.guild.id;
        const user = message.author.id;
	
        if (selected === "1" || selected === "gift") {
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
const receiver = message.mentions.users.first().id

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
		sender: message.author.id,
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
const chan = message.guild.channels.cache.get("923227165976317982")

chan.send(`${message.author} just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
      message.delete()
      }
      }
        
            if (selected === "2" || selected === "elves") {
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
const receiver = message.mentions.users.first().id
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
		sender: message.author.id,
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

const chan = message.guild.channels.cache.get("923227165976317982")

chan.send(`${message.author} just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber}`)
      message.delete()
      }
      }
      
      if (selected === "3" || selected === "tree") {
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
const receiver = message.mentions.users.first().id
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
		sender: message.author.id,
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
const chan = message.guild.channels.cache.get("923227165976317982")

chan.send(`${message.author} just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
      message.delete()
      }
      }
      
      if (selected === "4" || selected === "santa") {
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
const receiver = message.mentions.users.first().id
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
		sender: message.author.id,
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
const chan = message.guild.channels.cache.get("923227165976317982")

chan.send(`${message.author} just sent a wish with a number **${wishnumber}** \n\n ${wish} \n\n accept it using **!accept ${wishnumber} `)
      message.delete()
      }
      }
		}
    }
		}
		
