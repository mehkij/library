const myLibrary = ["The Hobbit", "Harry Potter", "Lord of the Rings", "Divergent", "A Thousand Splendid Suns"];
const container = document.querySelector(".container");

function Book(name, author, pages, status) {
  this.name = name
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function() {
    return name + " by " + author + ", " + pages + ", " + status + ".";
  }
}

function addBookToLibrary() {
  let input = prompt("Enter the name of the book you would like to add:");
  myLibrary.push(input);
}

function displayBooks() {
  myLibrary.forEach(function() {
    const div = document.createElement("div");
    div.classList.add("book");
    div.textContent = myLibrary;
    const p = document.createElement("p");
    div.appendChild(p);
    container.appendChild(div);
  });
}

displayBooks();