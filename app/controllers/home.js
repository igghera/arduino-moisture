var mongoose = require('mongoose'),
  MoistureModel = mongoose.model('MoistureLevel');

// On GET

exports.index = function(req, res) {
  // Select all values
  MoistureModel.find(function(err, levels) {
    if(err) throw new Error(err);
    // And respond to the request with the list
    return res.send(levels);
  });
};

// On POST

exports.create = function(req, res) {
  var d = new Date();
  // Add timezone offset
  var c = new Date(d.getTime() + 10 * 1000 * 60 * 60);  
  
  console.log("["+ c.toGMTString() +"] Saving value " + req.body.value);

  var moistureLevel = new MoistureModel({
    time: c.getTime(), //req.body.time,
    value: req.body.value
  });

  moistureLevel.save(function (err) {
    if (!err) {
      return res.send(moistureLevel);
    } else {
      return console.log(req.body);
    }
  });
};
