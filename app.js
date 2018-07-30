var express = require('express')
 , createError = require('http-errors')
 , path = require('path')
 , cookieParser = require('cookie-parser')
 , logger = require('morgan')
 , configs = require('./config')
 , routes = require('./routes')


const bodyParser = require('body-parser');
// app definition
var app = express();

// CORE MIDDLEWARE
// body-parser
// https://www.npmjs.com/package/body-parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/needs', routes.needs.list);
app.post('/needs', routes.needs.add);


// set up neo4j
//app.use(neo4jConfig.get('api_path'), api);


/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

module.exports = app;
