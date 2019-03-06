const mongose = require('mongoose');

mongose.connect('mongodb://localhost/baseapi',{ 
    useCreateIndex: true,
    useNewUrlParser : true
});

mongose.Promise = global.Promise;

module.exports = mongose;