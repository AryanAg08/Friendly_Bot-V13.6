const mongo = require("mongoose");

const Rem = {
    type: String,
    required: true,
}

const Stats = new mongo.Schema({
    GG: Rem,
    Category: Rem,
    MemberCount: {
        type: String,
        required: false,
    },
    Bots: {
        type: String,
        required: false,
    },
    Role: {
        type: String,
        required: false,
    },
    Online: {
        type: String,
        required: false,
    },
    VcMembers: {
        type: String,
        required: false,
    },
});

module.exports = mongo.model('1Stats', Stats);