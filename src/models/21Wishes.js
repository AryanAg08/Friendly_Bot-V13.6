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
wishnumber: {
      type: Number,
      required: false,
},
sender: {
	  type: String,
	 required: false,
	},
receiver: {
	type: String,
	required: false,
	}, 
wish: {
	type: String,
	required: false,
	},
item: {
	type: String,
	required: false,
	},
accept: {
	type: String,
	required: false, 
	},
	FinalForWeb: {
      type: String,
	  required: false,
	}
})

module.exports = new mongoose.model('christmas-msgs', week);