module.exports = {
    commands: ["Dash"],
    minArgs: 0,
    callback: async (message) => {
        const X1 = require("../../../models/29sv-session");

        const X2 =  await X1.find()

        for (qq of X2) {
            const userId = qq.user
            const Time = qq.timestamp

            const reply = `Today's study Hours: \n <@${userId}> ---> ${Time}hours \n`;

            message.reply(reply);
        }
    }
}