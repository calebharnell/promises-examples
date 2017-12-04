const Book = require('./models/book')
const Author = require('./models/author')

// CRUD using CALLBACKS

// CREATE

// Book.create({title: "Animal Farm", author: "George Orwell"}), (error, response) => {
//   console.log(response);
//   if (error){
//     console.log(error);
//     return;
//   }
// }

// READ

// Book.find(function (error, response) {
//   response.forEach((book) => console.log(book.title + ': ' + book.author));
// });


// UPDATE

// Book.findByIdAndUpdate('5a24b67a7e2c0d13d4220507', { $set: { author: 'Georgie Orwell' }}, { new: true }, function (err, response) {
//   if (err) console.log(err);
//   console.log(response);
// });

// DELETE

// Book.findByIdAndRemove('5a24b67a7e2c0d13d4220507', (error, response) => {
//     console.log(response);
// });

// CRUD using PROMISES

// CREATE

// Book.create({title: "Animal Farm", author: "George Orwell"})
  // .then((book) => {
  //   console.log(book);
  // })

// READ

// Book.find().then((book) => {
//   console.log(book);
// })

// UPDATE

// Book.findByIdAndUpdate('5a24b78dd284941498f43c60', { $set: { author: 'Georgie Orwell' }}, { new: true })
//   .then((book) => {
//     console.log(book)
//   })

// DELETE

// Book.findByIdAndRemove('5a24b78dd284941498f43c60')
//   .then((book) => {
//     console.log(book)
//   })

// CRUD using ASYNC/AWAIT

// CREATE

// async function createBook(title, author) {
//   const newBook = await Book.create({title: title, author: author});
//   console.log(newBook);
// }
//
// createBook("Animal Farm", "George Orwell");

// READ

// async function readBook() {
//   const book = await Book.find();
//   console.log(book);
// }
//
// readBook();

// UPDATE

// async function updateBook() {
//   const book = await Book.findByIdAndUpdate('5a24bf975d238815921b71f7', { $set: { author: 'Georgie Orwell' }}, { new: true });
//   console.log(book);
// }
//
// updateBook();

// DELETE

// async function deleteBook() {
//   const book = await Book.findByIdAndRemove('5a24bf975d238815921b71f7');
//   console.log(book);
// }
//
// deleteBook();

// CALLBACKS - Create relationship

// Author.create(({name: "George Orwell"}), (error, response) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(response);
//   Book.create({title: "Animal Farm", author: response._id}, (error, response) => {
//     if (error) {
//       console.log(error);
//       return;
//     } else {
//       console.log(response);
//     }
//   })
// })

// FIND and POPULATE

// Book.find().populate('author').
//   exec(function (error, response) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(response)
//       console.log(response[0].author.name)
//     }
//   });

// PROMISES - Create relationship

// Author.create({name: 'George Orwell'}).then((author) => {
//   Book.create({title: 'Animal Farm', author: author._id}).then((book) => {
//     console.log(book);
//   })
// })

// Book.find().populate('author').then((books) => {
//   console.log(books);
// }).catch((error) => {
//   console.log(error)
// });
