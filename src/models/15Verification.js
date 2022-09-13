const mongo = require("mongoose");

const Verif = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    VerificationLevel: {
        type: String,
        required: false,
    },
    VerificationStatus: {
        type: String,
        required: false,
    },
    MSGID: {
        type: String,
        required: false,
    },
})

module.exports = mongo.model('Verification', Verif);