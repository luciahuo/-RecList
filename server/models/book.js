var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
  user_id : mongoose.Schema.Types.ObjectId,
  date_created : Date,
  title : String,
  rating : Number,
  review : String
});

var Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.createBook = function(newBook, cb) {
  newBook.save(cb);
}

module.exports.deleteBook = function(newBookId, cb) {
  Book.findByIdAndRemove(newBookId, cb);
}

module.exports.getUserBooks = function(userId, cb) {
  var query = {'user_id': userId};
  Book.find(query, cb);
}
