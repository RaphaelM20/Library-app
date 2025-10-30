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

    saveLibrary();
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
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', () => {
            const index = myLibrary.findIndex(b => b.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }

            saveLibrary();
            displayLibrary();
        });
        
        card.appendChild(removeBtn);
        cardsContainer.appendChild(card);
    }
}

//local storage

function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function loadLibrary() {
    const stored = localStorage.getItem('myLibrary');
    if (stored) {
        const parsed = JSON.parse(stored);
        myLibrary.length = 0;
        parsed.forEach(book => myLibrary.push(book));
    }
}

//

const bookButton = document.querySelector('#addBookButton');
const modal = document.querySelector('#formModal');
const form = document.getElementById('addBookForm');

bookButton.addEventListener('click', () => {
    modal.classList.add('show');
})

//close modal
modal.addEventListener('click', (event) => {
    if (event.target === modal){
        modal.classList.remove('show');
    }
})

//handle form submission
 form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    modal.classList.remove('show');
    form.reset();
 })

//page load
loadLibrary();
displayLibrary();