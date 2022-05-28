const mongo = require("mongoose");

const Bday = new mongo.Schema({
    GG: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    Day: {
        type: String,
        required: true,
    },
    Month: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true,
    },
    BdDate: {
        type: String,
        required: true,
    },
    ServerWish: {
        type: String,
        required: false,
    },
    BDRole: {
        type: String,
        required: false,
    },
    BDChannel: {
        type: String,
        required: false,
    },
    Age: {
        type: String,
        required: false,
    }
})