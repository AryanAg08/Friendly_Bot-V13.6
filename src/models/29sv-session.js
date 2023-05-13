const mongo = require("mongoose");

const SV = new mongo.Schema({
    user: {
        type: String,
        required: true,
    },
    Time: {
        type: Number,
        required: false,
    },
    Joined: {
        type: String,
        required: false,
    },
    timestamp: {
        type: Number,
        required: false,
    },
});

module.exports = mongo.model("SV-study-session", SV);