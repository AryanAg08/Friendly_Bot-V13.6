module.exports = (client) => {

    client.on("ready", async () => {
        const schedule = require("node-schedule");

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            const guild = client.guilds.cache.get('703937875720273972');
            const voiceChannels = await guild.channels.cache.filter(c => c.type === 'GUILD_VOICE');
            let count = 0;

            for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
            
            const channelId = "886948093566808095";

            const AA = await guild.channels.cache.get(channelId);
            AA.setName(`Currently Studying: ${count}`);
            
            let memberCount;
            memberCount = guild.roles.cache.get("707547622591692911").members.size;
            const channelID = "862013407225053244"
            const channel = guild.channels.cache.get(channelID)
            const CC = memberCount / 1000 
            const NN = Math.round(CC * 100) / 100
            channel.setName(`Verified: ${NN}k`)
            

        });

    })
}