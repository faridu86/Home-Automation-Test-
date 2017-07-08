`use strict`;

global.config = require(`./app/config/main`);
require(`./app/config/connect`);
require(`./app/models`);

var path = require(`path`);
var express = require(`express`);
var bodyParser = require(`body-parser`);
var session = require('express-session');
var routes = require(`./app/routes`);
var app = express();

app.set(`port`, global.config.port || 3000);
app.set(`view engine`, `ejs`);
app.set(`views`, `./app/views`);

app.use(bodyParser.raw({limit:`50mb`,type:["application/octet-stream","image/*"]}));
app.use(bodyParser.json({limit: `50mb`}));
app.use(bodyParser.urlencoded({limit: `50mb`, extended: true, parameterLimit: 10000}));
app.use(bodyParser.text());

app.use(session({
  name: "haa:sess",
  secret: ["shhhh, its secret."],
  saveUninitialized: false,
  resave: false,
  domain: global.config.domainForCookie
}));

app.use(`/public`, express.static(`public`));
  
routes(app);

app.listen(3000, function () {
  console.log(`haa app listening on port 3000!`)
});