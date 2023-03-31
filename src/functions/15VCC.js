const S1 = require("../models/26study-Sessions");

async function CountMembers(client , guildId, channelId) {
    
        try {
          let guild = client.guilds.cache.get(guildId);
          let voiceChannel = await guild.channels.fetch(channelId, { force: true });
      
          return voiceChannel.members?.size;
        } catch (error) {
          logger.error('Error while performing usercount');
          console.log(error);
        }
      }

  
module.exports = {
    CountMembers,
}


/**
 * User Joins the channel 
 * If personCount = 1;
 * start the timer for 60m 
 * else if start the other timer of time difference of next timer to mix both of them
 * If difference is smaller than 10m then merge it. 
 * Else make another timer. 
 * Give coins on the same. 
 */