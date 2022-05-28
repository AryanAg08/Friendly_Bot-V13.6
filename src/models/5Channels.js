const mongo = require("mongoose");

const Chan = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    Schedulechan: {
        type: String,
        required: false,
    }
});


module.exports = mongo.model('2Channels', Chan);    