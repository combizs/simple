
/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes'), user = require('./routes/user'), http = require('http'), path = require('path');

var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/random');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("opening connection");
});

var Cat = require('./models/schemas.js').Cat;

Cat.find({name: "Zildjian"}, function(err, docs){
  // conditional statement, if docs.length...
  if(err) console.log(err);
  if(docs.length) console.log("got results");
});

// var RedisStore = require('connect-redis')(express);
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
// app.use(express.cookieParser());
// app.use(express.session({secret: '1234567890QWERTY'}));
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
