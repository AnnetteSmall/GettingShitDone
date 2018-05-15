var mongoose = require('mongoose'),
Food = mongoose.model('food');

exports.cleanResults = function(results){
  for (var i = 0; i < results.length; i++) {
    // console.log(results[i].food_description);
    var res = (results[i].food_description).split("-");
    results[i].food_serving = (res[0]).trim();
    var res2 = res[1].split("|");

    var resCal = res2[0].split(":");
    resCal = resCal[1].replace(/\kcal/g,'');
    results[i].food_calories = (resCal).trim();

    var resFat = res2[1].split(":");
    resFat = resFat[1].replace(/\g/g,'');
    results[i].food_fat = (resFat).trim();

    var resCarbs = res2[2].split(":");
    resCarbs = resCarbs[1].replace(/\g/g,'');
    results[i].food_carbs = (resCarbs).trim();

    var resProt = res2[3].split(":");
    resProt = resProt[1].replace(/\g/g,'');
    results[i].food_protein = (resProt).trim();
    var newFood = Food({
      brand_name:results[i].brand_name,
      food_description:results[i].food_description,
      food_id:results[i].food_id,
      food_name:results[i].food_name,
      food_type:results[i].food_type,
      food_url:results[i].food_url,
      food_serving:results[i].food_serving,
      food_fat:results[i].food_fat,
      food_carbs:results[i].food_carbs,
      food_protein:results[i].food_protein,
      food_calories:results[i].food_calories
    });
    var query = {food_id : newFood.food_id};
    console.log(query);
    var update = {$set:{brand_name:newFood.brand_name,
      food_description:newFood.food_description,
      food_id:newFood.food_id,
      food_name:newFood.food_name,
      food_type:newFood.food_type,
      food_url:newFood.food_url,
      food_serving:newFood.food_serving,
      food_calories: newFood.food_calories,
      food_carbs: newFood.food_carbs,
      food_fat: newFood.food_fat,
      food_protein: newFood.food_protein}};


    function updateFood(newFood,cb){
      Food.find({food_id : newFood.food_id}, function (err, docs) {
        if (docs.length){
          cb('Food exists already',null);
        }else{
          newFood.save(function(err){
            cb(err,newFood);
          });
        }
      });
    }
    updateFood(newFood,function(err2,newFood){
           if (err2 || !newFood){
               console.log('error updated user: ',err2);
           }else{
               console.log('food updated: yeha ',newFood);
             }
           })

    // Food.findOneAndUpdate(query, update, {new:true}, function(error, result) {
    //   if (!error) {
    //     // If the document doesn't exist
    //     if (!result) {
    //       console.log("could not find ", newFood.food_id);
    //       // Save the document
    //       newFood.save(function(err) {
    //       })
    //       .then(function(newFood) {
    //         console.log("Saved ", newFood)
    //       }, function(err) {
    //         console.log(err)
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //     }
    //   } else {
    //     console.log(error)
    //   }
    // })
    // function sleep(milliseconds) {
    //   var start = new Date().getTime();
    //   for (var i = 0; i < 1e7; i++) {
    //     if ((new Date().getTime() - start) > milliseconds){
    //       break;
    //     }
    //   }
    // }
    // sleep(1000);
  }
}
