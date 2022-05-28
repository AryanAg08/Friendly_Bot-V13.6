const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("warn")
        .setDescription(`Warning system!!`)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('warn-user')
                .setDescription(`Warn respective user`)
                .addUserOption((option) =>
                    option
                        .setName("target")
                        .setDescription("select user to warn")
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('warn-reason')
                        .setDescription("Specify the reason to warn!!")
                        .setRequired(false)
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