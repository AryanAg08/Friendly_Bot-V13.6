const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server-invites')
        .setDescription('Shows top 5 server invites!!!')
};