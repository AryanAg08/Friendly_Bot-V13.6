const mongoose = require("mongoose")

const week = mongoose.Schema({
GGuild: {
    type: String,
    required: true,
    }, 
user: {
   type: String,
   required: true,
},
candies: {
      type: Number,
      required: false,
},
})

module.exports = new mongoose.model('christmas-candies', week);
