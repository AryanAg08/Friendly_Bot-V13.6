const mongo = require("mongoose");

const Premium = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    PurchasedTime: {
        type: String,
        required: false,
    },
    ValidTill: {
        type: String,
        required: false,
    },
    ValidMonth: {
        type: String,
        required: false,
    },
    LastPurchase: {
        type: [Object],
        required: false,
    },
    RefrenceID: {
        type: String,
        required: false,
    },
    PremiumCode: {
        type: String,
        required: false
    },
    ServersCount: {
        type: Number,
        required: false,
    },
    MoneyTransferred: {
        type: String,
        required: false,
    },
});

module.exports = mongo.model('Premium-Schema', Premium);