const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const bookContainer = document.querySelector('#book-container');

function renderCard() {
  myLibrary.forEach((elem, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', i);
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

const modal = document.querySelector('#modal');
const addButton = document.querySelector('#add-book');
const closeButton = document.querySelector('.close');

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

function addBookToLibrary(event) {
  event.preventDefault();
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const status = document.querySelector('input[type="radio"]:checked').value;

  const book = new Book(author, title, pages, status);

  myLibrary.push(book);

  bookContainer.innerHTML = '';

  renderCard();
}

const modalBtn = document.querySelector('#modal-btn');

modalBtn.addEventListener('click', addBookToLibrary);
