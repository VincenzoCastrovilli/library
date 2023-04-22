const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book('Coelho', 'Alchimista', 300, false);
  myLibrary.push(book);
}

addBookToLibrary();

console.log(myLibrary);
