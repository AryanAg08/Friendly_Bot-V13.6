const mongo = require("mongoose");

const Vote = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    }, 
    user: {
        type: String,
        required: true, 
    }, 
    VoteOn: {
        type: String,
        required: true,
    }
});

module.exports = new mongo.model("Vote-Schema", Vote);