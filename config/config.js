var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'arduino-moisture-server'
    },
    port: 4000,
    db: 'mongodb://localhost/arduino-moisture-server-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'arduino-moisture-server'
    },
    port: 4000,
    db: 'mongodb://localhost/arduino-moisture-server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'arduino-moisture-server'
    },
    port: 4000,
    db: 'mongodb://localhost/arduino-moisture-server-production'
  }
};

module.exports = config[env];
