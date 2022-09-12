const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("forest")
        .setDescription('Forest sessions feature!!')
        .addSubcommand((subcommand) =>
            subcommand
                .setName('help')
                .setDescription(`Get forest session command info!!`)
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('code')
                .setDescription('Add your forest code here!!')
                .addStringOption((option) =>
                    option
                        .setName('code-link')
                        .setDescription('Your forest code or link!!')
                        .setRequired(true)
                )
                .addIntegerOption((option) =>
                    option
                        .setName("starting")
                        .setDescription("Enter the starting time")
                        .setRequired(true)
                        .setMinValue(2)
                        .setMaxValue(45)
                )
                .addIntegerOption((option) =>
                    option
                        .setName("tree-duration")
                        .setDescription("how long is the tree session!!")
                        .setRequired(true)
                        .setMinValue(10)
                        .setMaxValue(180)
                )
        )

};