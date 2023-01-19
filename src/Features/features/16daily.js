const { Daily_module } = require("../../functions/12daily");

module.exports = (client) => {
    client.on("ready", async () => {
        const schedule = require("node-schedule");

      var j = schedule.scheduleJob("0 2 * * *", async function() {
        Daily_module(client);
      });
    });
}