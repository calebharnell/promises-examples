const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/books', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = { mongoose, db }
