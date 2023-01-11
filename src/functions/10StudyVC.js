const Time = require("../models/14VCStudy");

async function AddTime (user, GuildID) {
    const Min = "0.1"
    const guildId = GuildID
    return await Time.findOneAndUpdate({ 
        guildId, 
        user,
    },{ 
        user,
        $inc: {  
        Daily: Min,
        Weekly: Min,
        Monthly: Min, 
        ServerTime: Min,
     },},{
         upsert: true, 
         new: true 
        }) 
        && await Time.findOneAndUpdate({ 
            guildId, 
            user: "anon",
        },{ 
            userId: "anon", 
            $inc: { 
                Daily: Min,
                Weekly: Min,
                Monthly: Min, 
                ServerTime: Min,
            },},{
                upsert: true, 
                new: true 
            });  
}

module.exports = {
    AddTime
}