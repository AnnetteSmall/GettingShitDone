const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  dob:{
    type: Date,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  activity:{
    type:String,
    required: true
  },
  height:{
    type:Number,
    required:true
  },
  date:{
    type:Date,
    default: Date.now
  }
});

mongoose.model('profile', ProfileSchema);

// module.exports = ProfileModel;
