const myLibrary = [];


function Book(title, author, pages, is_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.is_read = is_read;
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.is_read}`
    }
}

function addBookToLibrary(title, author, pages, is_read) {
    const book = new Book(title, author, pages, is_read);
    myLibrary.push(book);
}

function displayLibrary(){
    const books = document.querySelector(".container");   
    books.innerHTML = "";

    myLibrary.forEach(function(book, index) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const readStatus = document.createElement("p");
        readStatus.textContent = `Read: ${book.is_read ? "Yes" : "No"}`;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(readStatus);

        books.appendChild(bookCard);
    });
}

const newBookButton = document.querySelector("#newBookButton");
const formContainer = document.querySelector("#formContainer");
const closeBtn = document.querySelector(".close");

addBookToLibrary("rod", "kusi", 13);
addBookToLibrary("rfd", "kui", 18, "Yes");
collection(myLibrary);