module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.channel.type === "DM") return;
        const { } = require("../functions/1slash");
        const { commandName } = interaction;

    });
} 