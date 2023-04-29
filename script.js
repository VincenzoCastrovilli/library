const myLibrary = [
  {
    author: 'JK',
    title: 'HP',
    pages: 900,
    read: true,
  },
  {
    author: 'Tolkien',
    title: 'Rings',
    pages: 700,
    read: false,
  },
];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const bookContainer = document.querySelector('#book-container');

function renderCard() {
  myLibrary.forEach((elem) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const author = document.createElement('div');
    author.classList.add('book-author');
    author.textContent = elem.author;
    card.appendChild(author);
    const title = document.createElement('div');
    title.classList.add('book-title');
    title.textContent = elem.title;
    card.appendChild(title);
    const pages = document.createElement('div');
    pages.classList.add('book-pages');
    pages.textContent = elem.pages;
    card.appendChild(pages);
    const read = document.createElement('div');
    read.classList.add('book-read');
    read.textContent = elem.read;
    card.appendChild(read);
    bookContainer.appendChild(card);
  });
}

renderCard();
