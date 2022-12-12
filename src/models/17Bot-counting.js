const mongo = require("mongoose");

const Try = {
    type: String,
    required: false,
}

const AB = {
    type: Number,
    required: false,
}

const BOT = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    LastCountUser: Try,
    CurrentCount: AB,
    NextCount: AB,
    Wrong: AB,
    Score: AB,
    LeaderBoard: Try,
    StarPoint: AB,
    CHAN: Try,
    Goodies: Try,
});

module.exports = mongo.model('Bot_count', BOT);