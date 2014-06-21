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
  console.dir(req);

  var moistureLevel = new MoistureModel({
    time: req.body.time,
    value: req.body.value
  });

  moistureLevel.save(function (err) {
    if (!err) {
      return res.send(moistureLevel);
    } else {
      return console.log(err);
    }
  });
};
