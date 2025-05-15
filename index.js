require('dotenv').config();
const { Intents, Client, Collection, RoleManager } = require("discord.js");
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
]
const client = new Client({ intents: allIntents, partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', 'USER'] });
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

client.on('ready', async () => {
    await mongo();
    console.log(`Checking Mongo`);
    client.user.setActivity(`Working on my logic!!`);
    client.user.setStatus('online');
    const guild = client.guilds.cache.get("703937875720273972");
    console.log(guild);
    console.log("\n\n\ this is channel info!!\n\n\n");
    const chan = client.channels.cache.get("997941830396170340");
    console.log(chan);
});

console.log(`Bot is online`);
client.login(process.env.TOKEN);


const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

// Function to ping Google
const pingGoogle = async () => {
    try {
        const response = await fetch("https://www.google.com");
        if (response.ok) {
            console.log("Ping successful at", new Date().toLocaleTimeString());
        } else {
            console.log("Ping failed with status:", response.status);
        }
    } catch (error) {
        console.log("Error pinging Google:", error.message);
    }
};

// Ping Google every 1 minute
setInterval(pingGoogle, 30000);

// Root route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    pingGoogle(); // Initial ping on startup
});
