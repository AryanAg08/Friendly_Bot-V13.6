const mongo = require("mongoose");

const pomUser = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: false,
    },
    PomSession: {
        type: String,
        required: false,
    },
    PomCurrent: {
        type: String,
        required: false,
    },
    PomGoal: {
        type: String,
        required: false,
    },
    PomPoints: {
        type: Number,
        required: false,
    },
    POMCHANNEL: {
        type: String,
        required: false,
    },
    POMROLE: {
        type: String,
        required: false,
    },
})

module.exports = mongo.model("Pom-User", pomUser);