var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var billingrouter = require("./routes/billing/billing.router");
var landingRouter = require("./routes/landing/landing.router");
var redirectRouter = require("./routes/redirect/redirect.router");
var subscriptionRouter = require("./routes/subscription/subscription.router");
var fetchGamesRouter = require("./routes/fetchGames/fetchgames.router");
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
var cors = require("cors");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build")));

app.use(cors({}));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use("/billing", billingrouter);
app.use("/landing", landingRouter);
app.use("/DOIRedirect", redirectRouter);
app.use("/subscription", subscriptionRouter);
app.use("/fetch-games", fetchGamesRouter);
// app.use("/DOIRedirect",)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
