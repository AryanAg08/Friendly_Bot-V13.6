const mongo = require("mongoose");

const poms = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: false,
    },
    SessTime: {
        type: Number,
        required: false,
    },
    RemainingTime: {
        type: Number,
        required: false,
    },
    MembersJoined: {
        type: Number,
        required: false,
    },
    VCSet: {
        type: String,
        required: false,
    },
    StartTime: {
        type: Number,
        required: false,
    },
    MessageID: {
        type: String,
        required: false,
    },
    Times: {
        type: Number,
        required: false,
    },
    BreakTime: {
        type: String,
        required: false,
    },
    RoleID: {
        type: String,
        required: false,
    },
    Status: {
        type: String,
        required: false,
    },
    SessionLeft: {
        type: Number,
        required: false,
    },
    VCID: {
        type: String,
        required: false,
    },
    CHID: {
        type: String,
        required: false,
    },
    Open: {
        type: String,
        required: false,
    },
});

module.exports = mongo.model("Pom_schema", poms);