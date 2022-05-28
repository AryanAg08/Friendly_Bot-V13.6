async function Logs(interaction, client) {
    const A1 = require("../models/3server-registered");
    const guild = interaction.guild.id
    const GuildID = guild.id

    // check if property is true for the particular server 
    const A2 = await A1.find({
        GuildID,
        Logs: "YES",
    })
    if (A2) {
        /**
         * Contents: 
         * 1. Message deleted
         * 2. Message updated
         * 3. kicked 
         * 4. banned
         * 5. warned
         * 6. pfp change 
         * 7. server icon changed
         * 8. Roles updated
         * 9. Nickname changed
         * 10. Server  boosted
         * 11. 
         */
    } else {

    }

} 