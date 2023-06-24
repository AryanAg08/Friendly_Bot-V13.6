const mongo = require("mongoose");

const VCC = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    VCStatus: {
        type: [Object],
        required: false,
    },
});

module.exports = mongo.model("VCstat", VCC);