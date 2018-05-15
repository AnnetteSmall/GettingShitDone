const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Food = new Schema({
  brand_name:{
    type: String,
    required: false
  },
  food_description:{
    type: String,
    required: false
  },
  food_id:{
    type: String,
    unique : true,
    dropDups: true,
    required: true
  },
  food_name:{
    type: String,
    required:true
  },
  food_type:{
    type: String,
    required: false
  },
  food_url:{
    type: String,
    required: false
  },
  food_serving:{
    type:String,
    require:false
  },
  food_calories:{
    type:String,
    require:false
  },
  food_fat:{
    type:String,
    require:false
  },
  food_protein:{
    type:String,
    require:false
  },
  food_carbs:{
    type:String,
    require:false
  }

});

mongoose.model('food', Food);
