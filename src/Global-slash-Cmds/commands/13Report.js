const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Upset or obsessed with any feature! Tell us more about it 💗 ')
        .addStringOption((option) =>
            option
                .setName("report-feature")
                .setDescription(" Report!! Your efforts are appreciated 💓")
                .setRequired(false)
        )
        .addStringOption((option) =>
            option
                .setName("appreciate")
                .setDescription("Loved our bot services!! Sent us your valuble feedback💝")
                .setRequired(false)
        )
};