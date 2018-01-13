import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

var userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// actions that need to be completed before the schema gets saved
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      // hash the password
      user.password = hash;
      next();
    });
  });
});

// methods
module.exports.addUser = function(username, password, cb) {
  var newUser = new this({username: username, password: password});
  newUser.save(cb);
}

module.exports.checkIfExisting = function(username, password, cb) {
  this.findOne({username: username}, function(err, user) {
    if (!user) {
      cb('no user');
    } else {
      bcrypt.compare(password, user.password, function(err, isRight) {
        if (err) {
          return cb(err);
        }
        cb(null, isRight);
      });
    };
  });
}
