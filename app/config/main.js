var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'haa'
    },
    port: 3000,
    db: {
      username: "root", 
      password: "",
      database: "haa",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql",
      logging: false,
    },
    domainForCookie: '/'
  },

  test: {
    root: rootPath,
    app: {
      name: 'haa'
    },
    port: 3000,
    db: {
      username: "root", 
      password: "",
      database: "haa_test",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql",
      logging: false,
    },
    domainForCookie: '/'
  },

  production: {
    root: rootPath,
    app: {
      name: 'haa'
    },
    port: 3000,
    db: {
      username: "root", 
      password: "",
      database: "haa",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql",
      logging: false,
    },
    domainForCookie: '/'
  }
};

module.exports = config[env];