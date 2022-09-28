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
    VerificationRole: {
        type: String,
        required: false,
    },
    VerificationChan: {
        type: String,
        required: false,
    },
    VerificationMsgchannel: {
        type: String,
        required: false,
    },
    VRFNMSG: {
        type: String,
        required: false,
    },
})

module.exports = mongo.model('Verification', Verif);