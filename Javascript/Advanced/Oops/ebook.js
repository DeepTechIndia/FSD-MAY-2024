class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getDetails() {
    return `${this.title} by ${this.author}`;
  }

  getPrice() {
    return `${this.price}`;
  }
}

class PrintedBooks extends Book {
  constructor(title, author, price, pages) {
    super(title, author, price);
    this.pages = pages;
  }

  getDetails() {
    return `${super.getDetails()} - ${this.pages} pages`;
  }
}

class Ebook extends Book {
  constructor(title, author, price, fileSize) {
    super(title, author, price);
    this.fileSize = fileSize;
  }
  getDetails() {
    return `${super.getDetails()} - ${this.fileSize} MB`;
  }
}

const PrintedBook = new PrintedBooks(
  "The Great gatsby",
  "Scott Fitzy",
  20,
  180
);

const eBook = new Ebook("1984", "George", 6, 2);

console.log(PrintedBook.getDetails());
console.log(eBook.getDetails());

// functional based system

// polymorphism
// encapsulation

// java => multi thread=> task
// javascript => single thread => work
// Event Loop =>
