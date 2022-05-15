const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("birthday")
        .setDescription('Birthday feature!')
        .addSubcommand((subcommand) =>
            subcommand
                .setName('help')
                .setDescription(`Get birthday command info!!`)
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('add')
                .setDescription('Add your birth day in format DD/MM/YYYY')
                .addIntegerOption((option) =>
                    option
                        .setName('day')
                        .setDescription('Day!!')
                        .setRequired(true)
                        .setMinValue(1)
                        .setMaxValue(31)
                )
                .addIntegerOption((option) =>
                    option
                        .setName("month")
                        .setDescription("Month!!")
                        .setRequired(true)
                        .setMinValue(1)
                        .setMaxValue(12)
                )
                .addIntegerOption((option) =>
                    option
                        .setName("year")
                        .setDescription("Year!!")
                        .setRequired(false)
                        .setMinValue(1900)
                        .setMaxValue(2022)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('list')
                .setDescription('Shows the current list or the month list you asked for!!')
                .addStringOption((option) =>
                    option
                        .setName('month-bday')
                        .setDescription("Name of the month or its number notation in MM!!")
                        .setRequired(false)
                )
        )
};