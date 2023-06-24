const mongo = require("mongoose");

const Session = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    Goals: {
        type: [Object],
        required: false,
    },
    Achieved: {
        type: [Object],
        required: false,
    },
    Efficiency: {
        type: Number,
        required: false,
    },
    Distractions: {
        type: Number,
        required: false,
    },
    MsgDistraction: {
        type: Number,
        required: false,
    },
    NoOfTimes: {
        type: Number,
        required: false,
    }, 
    VC: {
        type: [Object],
        required: false, 
    }
});

module.exports = mongo.model('session', Session);