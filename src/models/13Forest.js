const mongo = require("mongoose");

const Forest = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    Channel: {
        type: String,
        required: false,
    },
    Role: {
        type: String,
        required: false,
    },
    Trees: {
        type: Number,
        required: false,
    },
    TotalHrs: {
        type: Number,
        required: false
    }
});

module.exports = mongo.model(`Forest`, Forest);