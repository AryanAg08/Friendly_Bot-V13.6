const { MessageEmbed } = require("discord.js");

const VOICE_CHANNEL_ID = '860931349993357372';
const TEXT_CHANNEL_ID = '1107199740287922186';

async function startContinuousPomodoro(client) {
    const guild = client.guilds.cache.get("703937875720273972");
    const voiceChannel = guild.channels.cache.get(VOICE_CHANNEL_ID);
    const textChannel = guild.channels.cache.get(TEXT_CHANNEL_ID);

    if (!voiceChannel || !textChannel) {
        console.error("Voice or Text channel not found!");
        return;
    }

    while (true) {
        await runPhase("Session", 50, voiceChannel, textChannel);
        await runPhase("Break", 10, voiceChannel, textChannel);
    }
}

async function runPhase(phase, minutes, voiceChannel, textChannel) {
    let remaining = minutes * 60;

    const members = Array.from(voiceChannel.members.values());
    const mentionText = members.length > 0
        ? members.map(m => `<@${m.id}>`).join(' ')
        : "*No members in the channel*";

    const embed = new MessageEmbed()
        .setColor(phase === "Session" ? 0x1abc9c : 0xe74c3c)
        .setTitle(`${phase} Time!`)
        .setDescription(`⏳ **Time Left:** ${Math.floor(remaining / 60)}m ${remaining % 60}s`)
        .setTimestamp();

    const sentMessage = await textChannel.send({
        content: mentionText,
        embeds: [embed],
    });

    // Edit the message every minute
    while (remaining > 0) {
        await delay(60 * 1000);
        remaining -= 60;

        const currentMembers = Array.from(voiceChannel.members.values());
        const updatedMentions = currentMembers.length > 0
            ? currentMembers.map(m => `<@${m.id}>`).join(' ')
            : "*No members in the channel*";

        embed.setDescription(`⏳ **Time Left:** ${Math.floor(remaining / 60)}m ${remaining % 60}s`);
        embed.setTimestamp();

        await sentMessage.edit({
            content: updatedMentions,
            embeds: [embed],
        });
    }
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

module.exports = startContinuousPomodoro;
