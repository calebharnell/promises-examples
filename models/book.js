const { mongoose, db } = require('../database');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
Book = db.model('Book', {title: String, author: { type: Schema.Types.ObjectId, ref: 'Author' },});

module.exports = Book;
