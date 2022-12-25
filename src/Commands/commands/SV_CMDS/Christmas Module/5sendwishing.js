module.exports = {
    commands: "wishingall",
    minArgs: 0,
    callback: async (message) => {
        const { author, guild } = message;

        if (guild.id === "703937875720273972") {
            guild.members.cache.get("125438257654792192")
             //.fetch()
              //.then(members => members.forEach(member => {
                 // member
            .send(`Merry Christmas <@125438257654792192>⛄!!\n I hope you day was well spent and you enjoyed it a lot. I wish you all the best and send my heartmost thank you for being a part of the study vibes community. Thank you for joining our little family and making it more awesome. I wish you achieve all your dreams and become successful in your life and bring smile to yourself and many other on your way towards your success. \n I hope your 2022 was cheering at some point. (if not please come share it with me <@${author.id}> I am eagerly waiting to hear from each one of you.). \n I wish from all of my heart that this upcoming 2023 will bring you atmost joy and happiness and you achieve all the happiness that you deserve. \n With this imma end my message. (But that doesn't mean I have no words to say. :p). \n Merry christmas!! And also a happy happy new year 🌟✨✨🎆🎆❄️☃️⛄`)
            .catch(() => {
                console.error(`Failed to send Tanja84DK a message`)
            })
   // }))
        }
    }
}