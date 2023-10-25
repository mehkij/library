const myLibrary = [];

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
