const myLibrary = ["The Hobbit", "Harry Potter", "Lord of the Rings", "Divergent", "A Thousand Splendid Suns"];
const container = document.querySelector(".container");
const button = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".dialog-button")
const closeButton = document.querySelector(".close-button")
const submitButton = document.querySelector(".submit-button")

function Book(name, author, pages, status) {
  this.name = name
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function() {
    return name + " by " + author + ", " + pages + ", " + status + ".";
  }
};

function addBookToLibrary() {
  button.addEventListener("click", () => {
    let input = prompt("Enter the name of the book you would like to add:");
    myLibrary.push(input);

    // Checks if there are books in the array, then clears the display before it appends the new book. This makes it so it doesn't append the entire array repeatedly.

    if (document.querySelector(".container > .book")) {
      container.textContent = "";
      displayBooks();
    } else {
      displayBooks();
    };
  });
};

function displayBooks() {
  for (index = 0; index < myLibrary.length; index++) {
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("style", "display: flex; background-color: red; border-radius: 5px; margin: 15px;")
    const p = document.createElement("p");
    p.textContent = myLibrary[index];
    div.appendChild(p);
    container.appendChild(div);
  };
};

// Opens up the modal form

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Closes the modal form

closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
});

displayBooks();
addBookToLibrary();
