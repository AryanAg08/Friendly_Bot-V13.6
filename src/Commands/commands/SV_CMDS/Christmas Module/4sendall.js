module.exports = {
	commands: "send", 
	minArgs: 0, 
	callback: async (message, arguments, text, client) => {
		const { author, guild } = message
       const Aa = require("../../../../models/21Wishes");
       const fs = require('fs')
        const path = require('path')
        const {MessageAttachment} = require('discord.js')
        const Discord = require("discord.js")
        const imagefive = fs.readFileSync(path.join(__dirname, 'Image5.jpg'))
        const imagefour = fs.readFileSync(path.join(__dirname, 'image4.jpg'))
        const imagethree = fs.readFileSync(path.join(__dirname, 'image3.jpg'))
        const imagetwo = fs.readFileSync(path.join(__dirname, 'image2.jpg'))
       // two = elves 
       // three = gifts
// four = Christmas tree
// five = Santa Claus
       if (author.id === "693351718263455755") {
       	
       const Ab = await Aa.find({
       	GGuild: guild.id,
           user: "anon",
	       accept: "yes",
           })
            
            for (qq of Ab) {
            	let one = qq.sender   //done
                let two = qq.receiver  //done
                let three = qq.wish //done
                let  four = qq.item  //done
               
                
                
              //  if (five === "yes") {
                	const receive = client.users.cache.get(two)
                    const sende = client.users.cache.get(one).tag
                  if (four === "gift") {
                  	let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Here is a special christmas Message for you! Happy christmas! -SV team`)
        .setDescription(three)
      //  .setImage("https://w7.pngwing.com/pngs/347/229/png-transparent-gift-heap-christmas-gifts-gift-boxes-gift-heap.png")
       .setFooter({ text: `by ${sende}`})
        
      try 
{ const attachment = new MessageAttachment(imagethree)
	receive.send({ embeds: [UserEmbed], files: [attachment]});
 //   receive.send(attachment)
      } catch(e) {
      	console.log(e)
      const channn = message.guild.channels.cache.get("796445338595885066")
      channn.send(`user's dm is not open, ${e}`)
      }
                  }

                    if (four === "elves") {
                  	let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Here is a special christmas Message for you! Happy christmas! -SV team`)
        .setDescription(three)
       .setFooter({ text: `by ${sende}`})
        
      try 
{  const attachment = new MessageAttachment(imagetwo)
	receive.send({ embeds: [UserEmbed], files: [attachment]});
      } catch(e) {
      	console.log(e)
      const channn = message.guild.channels.cache.get("796445338595885066")
      channn.send(`user's dm is not open, ${e}`)
      }
                  }


if (four === "tree") {
                  	let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Here is a special christmas Message for you! Happy christmas! -SV team`)
        .setDescription(three)
       .setFooter({ text: `by ${sende}`})
        
      try 
{  const attachment = new MessageAttachment(imagefour)
	receive.send({ embeds: [UserEmbed], files: [attachment]});
      } catch(e) {
      	console.log(e)
      const channn = message.guild.channels.cache.get("796445338595885066")
      channn.send(`user's dm is not open, ${e}`)
      }
                  }


if (four === "santa") {
                  	let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Here is a special christmas Message for you! Happy christmas! -SV team`)
        .setDescription(three)
       .setFooter({ text: `by ${sende}`})
        
      try 
{ const attachment = new MessageAttachment(imagefive)
	receive.send({ embeds: [UserEmbed], files: [attachment]});
      } catch(e) {
      	console.log(e)
      const channn = message.guild.channels.cache.get("796445338595885066")
      channn.send(`user's dm is not open, ${e}`)
      }
                  }




         // }
      }
       	}
       
		}
		}
