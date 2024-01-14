const mongo = require("mongoose");

const vote = mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    TotalVoted: {
        type: Number,
        required: true,
        default: 0,
    }
});

module.exports = new mongo.model("per-user-vote", vote);