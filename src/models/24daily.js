const mongo = require("mongoose");

const DAi = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    channel: {
        type: String,
        required: true,
    },
});

module.exports = mongo.model("Daily_module", DAi);