module.exports = {
    commands: ["Dash"],
    minArgs: 0,
    callback: async (message) => {
        const X1 = require("../../../models/29sv-session");

        const X2 =  await X1.find()
          var reply = "Total Study Time Today!! \n\n"

          const X3 = await X1.countDocuments();

        // for (qq of X2) {
        //     const userId = qq.user
        //     const Time = qq.timestamp ;
            // var i = 0;
            //          while (i != X3) {
            //             if (Time && Time != 0) {   
            //             reply += `<@${userId}> -> ${Time} minutes\n`;
            //         }
            //         i++;
            //          }  
            X2.forEach(QQ => {
                if (QQ.timestamp != 0 && QQ.timestamp != undefined) {
                    reply += `<@${QQ.user}> -> ${QQ.timestamp} minutes\n`;
                }                 
            });
       // }
        message.reply(reply);
    }
}