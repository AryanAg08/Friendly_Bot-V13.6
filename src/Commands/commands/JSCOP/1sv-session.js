module.exports = {
    commands: ["Dash"],
    minArgs: 0,
    callback: async (message) => {
        const X1 = require("../../../models/29sv-session");

        const X2 =  await X1.find()
          var reply = "Total Study Time Today!! \n\n"

       
            X2.forEach(QQ => {
                if (QQ.timestamp != 0 && QQ.timestamp != undefined) {
                   QQ.sort((a, b) => b.timestamp - a.timestamp);
                    reply += `<@${QQ.user}> -> ${QQ.timestamp} minutes\n`;
                }                 
            });
        message.reply(reply);
    }
}