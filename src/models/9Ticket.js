const mongo = require("mongoose");

const Tickt = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    Cat: {
        type: String,
        required: false,
    },
    LogChan: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model('Ticket', Tickt);