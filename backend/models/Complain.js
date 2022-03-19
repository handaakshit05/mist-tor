const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplainSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  complain: {
    type: String,
    required: true
  },
  //whatever the complain is
  complaintext: {
    type: String,
    required: true
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Complain = mongoose.model('complain', ComplainSchema);
