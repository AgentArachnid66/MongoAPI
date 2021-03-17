const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HitLocationsSchema = new Schema({
	U:{type:Number},
	V:{type:Number}
});


const SessionDataSchema = new Schema({
	Score:{
		type:Number
	},
	HitLocations:{
		type : [HitLocationsSchema]
	},

	Length:{
		type:Number
	}
});

const PlayerDataSchema = new Schema({
	Username : {
		type : String,
		required : true
	},
	Password:{
		type : String,
		required : true
	},
	Sessions:{
		type : [SessionDataSchema]
	}
});


module.exports = mongoose.model('Player', PlayerDataSchema);