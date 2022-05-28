const mongoose = require("mongoose")

const SWWW = mongoose.Schema({
    guildID: {
        type: String,
        required: true,
    },
    channelID: {
        type: String,
        required: true,
    },
    messa: {
        type: String,
        required: false,
    },
    roleyes: {
        type: String,
        required: false,
    },
    RRole: {
        type: String,
        required: false,
    },
    RRole2: {
        type: String,
        required: false,
    },
    RRole3: {
        type: String,
        required: false,
    },
    IfVC: {
        type: String,
        required: false,
    },
    WDM: {
        type: String,
        required: false,
    }
})

module.exports = new mongoose.model('welcome', SWWW)