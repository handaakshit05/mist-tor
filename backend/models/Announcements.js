const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnounceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  //whatever the announcement is
  announcetext: {
    type: String,
    required: true
  },
  venue: {
    type: String
  },
  timing: {
    type: Number
  },
  link: {
    type: URL
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Announce = model('announce', AnnounceSchema);
