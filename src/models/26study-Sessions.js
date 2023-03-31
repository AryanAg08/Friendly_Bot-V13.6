const mongo = require("mongoose");

const tt = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: false,
    },
    PersonCount: {
        type: Number,
        required: false,
    },
    TimerSize: {
        type: String,
        required: false,
    },
    BreakSize: {
        type: String,
        required: false,
    },
    CurrentSes: {
        type: String,
        requried: false,
    },
    MergeUsers: {
        type: Array,
        required: false,
    },
    TimerEmbedId: {
        type: String,
        required: false,
    },
    channelOriginalName: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model("Study-sessions-Timer", tt);