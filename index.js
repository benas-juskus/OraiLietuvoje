const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const session = require("express-session");

const app = express();

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/IndexRouter.js');

app.use(
    session({
      secret: "asdlkf.adsjfasddfkaū9įkdsjfalkdsfdf",
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
      resave: false,
    })
  );
  
  app.use('/', indexRouter);


  app.use(function(req, res, next) {
    next(createError(404));
  });


  module.exports = app;