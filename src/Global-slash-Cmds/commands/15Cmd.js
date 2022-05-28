const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create-cmd')
        .setDescription('Wanna create a customised cmd for your server 👀')
        .addStringOption((option) =>
            option
                .setName("cmd-info")
                .setDescription("please write a descrption about the cmd you want!!")
                .setRequired(true)
        ),
};