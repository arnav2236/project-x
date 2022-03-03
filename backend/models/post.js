const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Datapoint: { type: String, required: true },
  format_type:{type: String, required: true },
  size : {type: String},
  seed:{type: String},
  dependency : {type: String, required: true },
  expression : {type: String },
  group:{type: String }
});

module.exports = mongoose.model('Post', postSchema);
