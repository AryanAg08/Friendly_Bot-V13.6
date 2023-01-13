const mongo = require("mongoose");

const sec = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: false,
    },
    EveryonePing: {
        type: String,
        required: true,
    },
    InviteLinks: {
        type: String,
        required: true,
    },
    BadWords: {
        type: String,
        required: true,
    },
    Count: {
        type: Number,
        required: false,
    },
    IsPersonAllow: {
        type: String,
        required: false,
    },
    LogChannel: {
        type: String,
        required: true,
    },
});

module.exports = mongo.model("Security", sec);