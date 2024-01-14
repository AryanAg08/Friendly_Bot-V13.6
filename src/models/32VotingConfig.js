const mongo = require("mongoose");

const VotingConfig = mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    IsActive: {
        type: Boolean,
        required: true,
    },
    TotalItems: {
        type: Number,
        required: true,
    },
    VoteLimitPerUser: {
        type: Number,
        required: true,
    },
    TotalVotes: {
        type: Number,
        required: true,
    },
    VotingMsgID: {
        type: String,
        required: false,
    },
    VotingBoardChannel: {
        type: String,
        required: false,
    },
    VotingChannel: {
        type: String,
        required: true,
    }
});

module.exports = new mongo.model("Voting-schema", VotingConfig);