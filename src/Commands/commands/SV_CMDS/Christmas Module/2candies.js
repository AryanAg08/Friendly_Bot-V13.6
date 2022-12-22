module.exports = {
	commands: "candies",
	minArgs: 0, 
	callback: async (message, arguments, text) => {
        if (message.guild.id === "703937875720273972") {
		const Aa = require("../../../../models/20Candies")
		
		const GGuild = message.guild.id
		const user = message.author.id
		
		const AA = await Aa.find({
			GGuild,
			user,
			})
			
			if (AA) {
				for (qq of AA) {
					let count = qq.candies
					
					message.reply(`Currently you have ${count} candies left to spend, they are not for eating purpose :p `)
					}
					}
		}
    }
		}
