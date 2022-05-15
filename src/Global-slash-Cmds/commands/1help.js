const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays all commands or info about a certain command')
        .addStringOption((option) =>
            option
                .setName("command")
                .setDescription("The command name for which you want info!!")
        )
};
