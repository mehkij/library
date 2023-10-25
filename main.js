function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return name + " by " + author + ", " + pages + ", " + status + ".";
  }
}

