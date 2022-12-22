const mongo = require("mongoose");

const chris = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    IsStillActive: {
        type: String,
        required: false,
    },
    AddCandies: {
        type: String,
        required: false,
    },
    Time: {
        type: String,
        required: false,
    },
    MsgID: {
        type: String,
        required: false,
    },
    ChannelID: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model('Christmas_Package1', chris);