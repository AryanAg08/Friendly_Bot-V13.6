module.exports = { 
	commands: "accept",
	minArgs: 1,
	permissions: ["BAN_MEMBERS"],
	callback: async (message, arguments, text, client) => {
		const Aa = require("../../../../models/21Wishes");
		
		const wishnumber = arguments[0]
		const AA = await Aa.findOneAndUpdate({
			GGuild: message.guild.id,
			user: "anon",
			wishnumber,},
			{
				user: "anon",
				wishnumber, 
				accept: "yes",
				}, {
					upsert: true,
					new: true,
					}
					)
					console.log(AA)
					
					message.channel.send(`${wishnumber} is now accepted and will be sent on Christmas to respective dm`);
					const AB = await Aa.find({
						GGuild: message.guild.id,
						user: "anon",
						wishnumber,
						})
						
						if (AB) {
							for (qq of AB) {
								const sende = qq.sender
								
								const userfind = client.users.cache.get(sende)
								
								userfind.send("Your wishing is accepted and now will be sent to respective person on Christmas. thanks for writing such an awesome msg :> ")
		}
		}
}
}
