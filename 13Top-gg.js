module.exports = (client) => {
    client.on('ready', async () => {

        const { AutoPoster } = require("topgg-autoposter");
        const poster = AutoPoster("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5MDUwMzE5NTYyMDY3MTQ5OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI4NDQ3Mjg4fQ.5uyT4xY2-84bXyR2ZLIxWtw_rpaa6e-iNzlIK_E-asg", client);

        poster.on('posted', (stats) => { // ran when succesfully posted
            console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
            const chan = client.channels.cache.get("974757432142233602");
            chan.send(`Posted stats to top.gg!! | ${stats.serverCount} servers!!`);
        });
    })
}


/** 
 * Vote Tracker: 
 *   const VoteListener = require('topgg-vote-receiver');
        const vote = new VoteListener({
            auth: '8104085546Ag',
            port: "https://sv-server.herokuapp.com/dev/try",
        });

        vote.handleVotes();
        vote.on('voted', (vote) => {
            console.log(vote);
        });
        console.log(`Listening on 3000`);
 */