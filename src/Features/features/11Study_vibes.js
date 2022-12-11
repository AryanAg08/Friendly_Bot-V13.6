module.exports = (client) => {

    client.on("ready", async () => {
        const schedule = require("node-schedule");

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            console.log("Checking Vc Members!!!");
            const guild = client.guilds.cache.get('703937875720273972');
            const voiceChannels = await guild.channels.cache.filter(c => c.type === 'GUILD_VOICE');
            let count = 0;

            for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
            console.log(count);

            const channelId = "886948093566808095";

            const AA = await guild.channels.cache.get(channelId);
            AA.setName(`Currently Studying: ${count}`);

            MMC = guild.memberCount
            const CHANID = "876034122164895745"
            const CHANNN = guild.channels.cache.get(CHANID);
            const TC = MMC / 1000 
            const VD = Math.round(TC * 100 ) / 100 
            console.log(TC)
            CHANNN.setName(`Total Members: ${VD}k`);
            
        });

    })
}