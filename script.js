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
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      myLibrary.splice(index, 1);
      bookContainer.innerHTML = '';
      renderCard();
    });
    card.appendChild(deleteButton);
    const changeButton = document.createElement('button');
    changeButton.textContent = 'CHANGE';
    changeButton.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      myLibrary[index].read = !myLibrary[index].read;
      bookContainer.innerHTML = '';
      renderCard();
    });
    card.appendChild(changeButton);
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
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const status = document.querySelector('input[type="radio"]:checked').value;

  const book = new Book(author, title, pages, status);

  myLibrary.push(book);

  bookContainer.innerHTML = '';
  event.preventDefault();

  renderCard();
}

const modalBtn = document.querySelector('#modal-btn');

modalBtn.addEventListener('click', addBookToLibrary);
