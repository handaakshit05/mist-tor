const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const config = require('config');
const jwtSecret = config.get('jwtSecret');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  registration: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  //Board, ManComm or WorkComm
  clearance: {
    type: String,
    required: true
  },
  //For Board, what position do they hold
  position: {
    type: String,
    required: true
  },
  //whether the person is approved for editorial posts
  editorial: {
    type: Boolean,
    default: false
  },
  //user image
  avatar: {
    type: String
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

// create a jwt with the user payload
UserSchema.methods.generateAuthToken = function(payload) {
  token = jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: 360000 }
  );
  return token;
}

// encrypts the password before saving to the database
UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = User = mongoose.model('user', UserSchema);
