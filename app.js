import uuid from 'node-uuid';
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import passport from 'passport';

var JwtStrategy = require('passport-jwt').Strategy;

// setup the database
let app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// Use the EJS rendering engine for HTML located in /views
app.set('views', __dirname + '/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// Host static files on URL path
app.use(express.static(path.join(__dirname, 'public')));

// generate a cookie secret
var generateCookieSecret = function () {
  return 'iamasecret' + uuid.v4();
};

var cookieSecret = generateCookieSecret();

// mount the BodyParse middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieSession({
  secret: cookieSecret
}));

// use passport
app.use(passport.initialize());
app.use(passport.session());

// Use express Router middleware for root path
app.get('/', (req, res) => {
  if (req.session.username && req.session.username !== '') {
    // personal user page has editing abilities
    res.redirect('protected');
  } else {
    res.redirect('login');
  }
});

// login handlers
app.get('/login', (req,res) => {
  res.render('login');
});

// create a new book -- mounted middleware to authenticate requests
app.post('/api/createBook', passport.authenticate('jwt', {session: false}), function(req, res) {
  var bookName = req.body.bookName;
  var review = req.body.review;
  var rating = req.body.rating;

  // create model for updating db
  console.log("created book in the db");
})


// Start server
app.listen(app.get('port'), () => {
  console.log(`Express game server listening on port ${port}`);
});
