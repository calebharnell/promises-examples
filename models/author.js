const { mongoose, db } = require('../database');
Author = db.model('Author', {name: String});

module.exports = Author;
