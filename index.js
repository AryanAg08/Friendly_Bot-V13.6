require('dotenv').config();
const { Intents, Client, Collection } = require("discord.js");
const express = require("express");
const fetch = require("node-fetch");

// All required intents
const allIntents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
];

const client = new Client({ 
    intents: allIntents, 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', 'USER'] 
});

// Load modules
const features = require("./src/Features/load-features");
const commands = require("./src/Commands/load-commands");
const globalSlash = require("./src/Global-slash-Cmds/load-slash");
const mongo = require("./src/utils/mongo");
const Global = require("./src/utils/Slash-Integration");
const PandaCMD = require("./The pandamonium/Commands/load-commands");
const PandaFeature = require("./The pandamonium/Features/load-Features");

client.commands = new Collection();

features(client);
commands(client);
globalSlash(client);
Global(client);
PandaCMD(client);
PandaFeature(client);

// Bot startup logic
client.on('ready', async () => {
    await mongo();
    console.log("Connected to MongoDB");

    client.user.setActivity(`Working on my logic!!`);
    client.user.setStatus('online');

    const guild = client.guilds.cache.get("703937875720273972");
    const chan = client.channels.cache.get("997941830396170340");

    console.log("Guild:", guild?.name || "Not found");
    console.log("Channel:", chan?.name || "Not found");
});

client.login(process.env.TOKEN);
console.log("Bot is online...");

// --- Express Web Server to keep Render app alive ---
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bot is alive!");
});

app.listen(PORT, () => {
    console.log(`Web server running on port ${PORT}`);
});
