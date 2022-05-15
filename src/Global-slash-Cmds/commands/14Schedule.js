const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Write your daily schedule!!')
        .addStringOption((option) =>
            option.setName("tasks")
                .setDescription("Your schedule for today 😊🍀")
                .setRequired(true)
        ),
};