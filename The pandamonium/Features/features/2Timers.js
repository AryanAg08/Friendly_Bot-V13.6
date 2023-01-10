module.exports = (client) => {
    const schedule = require("node-schedule");
    const T1 = require("../../Schemas/1timer");

    client.on('ready', async () => {
        console.log(`Pandamonium Timer Feature!!`);
        const GG = "701822879066619995"
        const moment = require("moment");
       
        const chan = client.channels.cache.get("1010214273986859049");

        var j = schedule.scheduleJob('*/1 * * * *', async function () {
            console.log('pandamonium timer!!')
            const T2 = await T1.find({
                GG: GG,
            });
            if (T2) {
                console.log(T2);
            for (ee of T2) {
                const Time = ee.Timers
                const author = ee.user
                const TES = ee.Text
                console.log(Time + author + TES);
                const current = new Date(Date.now());
                const Curent = moment(current).format('DD/MM/YYYY-HH:mm')
                console.log(Curent)
                if (Time === Curent) {
                    console.log(`Timer found for pandamonium!!`)
                    chan.send(`Timer finshed :tada:!! <@${author}>  ${TES}`);

                    const T4 = await T1.findOneAndDelete({
                        GG,
                        user: author,
                        Timers: Time,
                        Text: TES,
                    });
                    console.log(`Deleted Timer log!!`);
                } 

            }
        } else return;
        })
    })
}