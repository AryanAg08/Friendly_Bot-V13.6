const mongoose = require("mongoose");

const servers = mongoose.Schema({
    GuildID: {
        type: String,
        required: true,
    },
    ifreaction: {
        type: String,
        required: false,
    },
    welcome: {
        type: String,
        required: false,
    },
    Todo: {
        type: String,
        required: false,
    },
    Event: {
        type: String,
        required: false,
    },
    VCStudy: {
        type: String,
        required: false,
    },
    Bday: {
        type: String,
        required: false,
    },
    Stats: {
        type: String,
        required: false,
    },
    Schedule: {
        type: String,
        required: false,
    },
    Ticket: {
        type: String,
        required: false,
    },
    Logs: {
        type: String,
        required: false,
    },
    Forest: {
        type: String,
        required: false,
    },
    Verification: {
        type: String,
        required: false,
    },
    Deadline: {
        type: String,
        required: false,
    },
    BotCount: {
        type: String,
        required: false,
    }
});

module.exports = new mongoose.model('1]registered-servers', servers);