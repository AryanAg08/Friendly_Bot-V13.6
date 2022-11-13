const { help1, help2 } = require("../../functions/4Buttons");

module.exports = (client) => {

    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;

        else {
            

            if (interaction.customId === "HPx001") {
                help1(interaction);
            }

            if (interaction.customId === "HPx002") {
               help2(interaction);
            }
        }
    })
}