const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Deletes messages from a certain chat!!')
        .addIntegerOption((option) =>
            option
                .setName("message-count")
                .setDescription("select number of messages to delete!!")
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(99)
        )
};