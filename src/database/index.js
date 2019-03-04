const mongose = require('mongoose');

mongose.connect('mongodb://localhost/baseapi',{useNewUrlParser:true});

mongose.Promise = global.Promise;

module.exports = mongose;