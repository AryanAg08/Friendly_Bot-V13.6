module.exports = (client) => {
    const schedule = require("node-schedule");

    client.on("ready", async () => {
        var j = schedule.scheduleJob('*/2 * * *', async function () {
            const CHANN = client.channels.cache.get("935604990909755402")
             if (CHANN) {
               CHANN.setName(`Server_Counts: ${client.guilds.cache.size}`);
             } else return 
             
             const guild = client.guilds.cache.get("806504713935781958")
               const channel = client.channels.cache.get("881564912026009631");
                if (channel) {
                  channel.setName(`Member-Count: ${guild.memberCount}`)           
                } else return
          })
    })
}