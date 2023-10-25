function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return name + " by " + author + ", " + pages + ", " + status + ".";
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");

console.log(theHobbit.info());
