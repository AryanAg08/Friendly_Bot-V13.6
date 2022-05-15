const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription('opens a support channel')
        .addSubcommand((subcommand) =>
            subcommand
                .setName('close')
                .setDescription(`closes the support channel!!`)
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("open")
                .setDescription("opens a support ticket for you!!")
        )
};