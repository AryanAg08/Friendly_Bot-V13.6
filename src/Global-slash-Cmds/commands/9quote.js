const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Tells a random quote!!')
};
