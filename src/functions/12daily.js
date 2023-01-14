async function daily (interaction) {
   const dd = require("words-of-the-day");

   dd.wordThink().then (async data => {
    await interaction.reply(data);
   })
}


module.exports = {
    daily
}