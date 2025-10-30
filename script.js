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

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

function displayLibrary() {
    for (const book of myLibrary) {
        console.log(book)
    }
}

//constructor and functions for myLibrary

//const document.querySelector('.addBookButton')