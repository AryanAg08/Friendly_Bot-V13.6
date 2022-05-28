const mongoose = require("mongoose");

const VCSS = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    Notification: {
        type: String,
        required: false,
    },
    TextChannel: {
        type: String,
        required: false,
    },
    VcCategory: {
        type: String,
        required: false,
    },
    VcChannel1: {
        type: String,
        required: true,
    },
    VcChannel2: {
        type: String,
        required: false,
    },
    RoleID: {
        type: String,
        required: false,
    },
    Daily: {
        type: Number,
        required: false,
    },
    Weekly: {
        type: Number,
        required: false,
    },
    Monthly: {
        type: Number,
        required: false,
    },
    ServerTime: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model(`Vc-Study`, VCSS);