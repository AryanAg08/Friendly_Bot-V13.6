const mongo = require("mongoose");

const same = {
    type: String,
    required: false,
};

const PVC = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    Category: same,
    Type: same,
    JoinV: same,
    VC: same,
    TC: same,
    CallNo: {
        type: Number,
        required: false,
    },
    SessionTime: same,
    Timer: same,
    BreakTime: same,
    TimeIsRunning: same,
    MemCount: same,
});

module.exports = mongo.model("Private-Channel", PVC)