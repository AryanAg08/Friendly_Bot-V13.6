const mongoose = require("mongoose")

const News = mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    CMDUsed: {
        type: Number,
        required: true,
    }
})

module.exports = new mongoose.model('bot-cmd count', News)