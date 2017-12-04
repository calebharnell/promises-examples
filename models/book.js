const { mongoose, db } = require('../database');
Book = db.model('Book', {title: String, author: String});

module.exports = Book;
