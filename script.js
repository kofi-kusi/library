const myLibrary = [];

function Book(title, author, pages, is_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.is_read = is_read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(){
    const books = document.querySelector(".container");   
    books.innerHTML = "";

    myLibrary.forEach(function(book, index) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        const description = document.createElement("p");
        description.textContent = book.info();
        description.classList.add("card-header");
        description.style.background = 'gray';

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const readStatus = document.createElement("p");
        readStatus.textContent = `Read: ${book.is_read ? "Yes" : "No"}`;

        const removeBook = document.createElement("button");
        removeBook.textContent = "delete";
        removeBook.style.cssText = "background-color: red; color: white; border: none; padding: 20px, width: 100%"

        removeBook.addEventListener("click", () => {
            bookCard.style.display = "none";
        })

        bookCard.appendChild(description);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(removeBook);

        books.appendChild(bookCard);
    });
}

const newBookButton = document.getElementById("newBookButton");
const formContainer = document.getElementById("formContainer");
const closeBtn = document.querySelector(".close");

newBookButton.addEventListener("click", () => {
    closeBtn.addEventListener("click", () => {
        formContainer.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === formContainer){
            formContainer.style.display = "none";
        } 
    });

    if(formContainer.style.display = "none"){
        formContainer.style.display = "flex";
    }else{
        formContainer.style.display = "none";
    }
});

document.querySelector("form").classList.add("open-sans-font");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.querySelector(`input[name="is-read"]:checked`);
    const is_read = status ? status.id === "Yes" : false;

    const book = new Book(title, author, pages, is_read);
    addBookToLibrary(book);

    displayLibrary();

    formContainer.style.display = "none";
    document.querySelector("form").reset();
})