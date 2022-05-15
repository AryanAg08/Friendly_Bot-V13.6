const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("warn")
        .setDescription(`Warning system!!`)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('help')
                .setDescription(`get info about command!!`)
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('user')
                .setDescription(`Warn respective user`)
                .addUserOption((option) =>
                    option
                        .setName("target")
                        .setDescription("select user to warn")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('stats')
                .setDescription(`get warn-stats for the selected user!!`)
                .addUserOption((option) =>
                    option
                        .setName('stat-user')
                        .setDescription('Select user!!')
                )
        )
}