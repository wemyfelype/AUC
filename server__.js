var express = require('express');
var routers = express.Router();
var dotenv = require('dotenv').config();

const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

var auth = require('./api/auths/auth')(passport);

var app = express();

app.set('view engine', 'ejs');

/*
app.get('/', function(req, res) {
    res.render('pages/login',{message: null});
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});
*/

app.use(session({  
    store: new MongoStore({db: global.db, ttl: 30 * 60 }),
    secret: '123',
    resave: false,
    saveUninitialized: false
})
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000);
console.log('3000 is the magic port');






//console.log('\x1b[33m%s\x1b[0m',">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//console.log(process.env.MONGO_CONNECTION);
//console.log('\x1b[33m%s\x1b[0m',">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//npm config set python C:\Users\730545952\.windows-build-tools\python27\python.exe

//mongo ds241699.mlab.com:41699/auc -u wemy -p wemy
//db.users.insert({username: "wemy", password: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW", email: "wemyfelype@hotmail.com"});