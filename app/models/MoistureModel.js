// Moisture model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MoistureSchema = new Schema({
  time: { type: Number, required: true },
  value: { type: Number, required: true }
});

var MoistureModel = mongoose.model('MoistureLevel', MoistureSchema);
