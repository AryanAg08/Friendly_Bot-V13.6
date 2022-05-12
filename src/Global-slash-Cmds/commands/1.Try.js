const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('name')
        .setDescription('Renames your vc!')
        .addStringOption(option =>
            option.setName('vcname')
                .setDescription('Write your vc name here')
                .setRequired(true)),
};