//constructor and functions for myLibrary

const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error ("Must use 'new' operator")
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const bookTitle = document.getElementById('book_title').value;
    const bookAuthor = document.getElementById('book_author').value;
    const bookPages = document.getElementById('book_pages').value;
    const readBook = document.getElementById('book_read').checked;
    const newBook = new Book(bookTitle, bookAuthor, bookPages, readBook);
    myLibrary.push(newBook)

    displayLibrary();
}

function displayLibrary() {
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';

    for (const book of myLibrary) {
        const card = document.createElement('div');
        card.classList.add('book-card');

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? '✅ Yes' : '❌ No'}</p>
            `
        cardsContainer.append(card);
    }
}

//unhide form

const bookButton = document.querySelector('#addBookButton')

bookButton.addEventListener('click', () => {
    document.getElementById('addBookForm').hidden = false;
})

//submit button to add and display library

document.getElementById('addBookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
})



