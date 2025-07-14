const { MessageEmbed } = require("discord.js");

const VOICE_CHANNEL_ID = '860931349993357372'; // Replace with your voice channel ID
const TEXT_CHANNEL_ID = '1107199740287922186';   // Replace with your text channel ID

async function startContinuousPomodoro(client) {
    const guild = client.guilds.cache.get("703937875720273972"); // Adjust if multiple guilds
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

    while (remaining > 0) {
        const members = Array.from(voiceChannel.members.values());
        const mentions = members.length > 0
            ? members.map(m => `<@${m.id}>`).join(' ')
            : "*No members in the channel*";

        const min = Math.floor(remaining / 60);
        const sec = remaining % 60;

        const embed = new MessageEmbed()
            .setColor(phase === "Session" ? 0x1abc9c : 0xe74c3c)
            .setTitle(`${phase} Time!`)
            .setDescription(`⏳ **Time Left:** ${min}m ${sec}s\n👥 **Members:**\n${mentions}`)
            .setTimestamp();

        await textChannel.send({ embeds: [embed] });

        // Wait for 1 minute (or less if nearing end)
        const delayFor = Math.min(60, remaining);
        await delay(delayFor * 1000);
        remaining -= delayFor;
    }
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

module.exports = startContinuousPomodoro;