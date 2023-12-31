// ONLINE BOOKSTORE
// Task: Design an online bookstore system using object-oriented principles.
// Instructions:
// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.

function Book(title,author,genre,price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}
function Author(name,birthYear,nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}
Book.prototype.getBookInfo = function(){
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: ${this.price}`);

}
let Author1 = new Author("James Clear",1959,"American");
let Author2 = new Author("J.K. Rowling", 1965, "British");

let Book1 = new Book("The Psychology of Money",Author1,"Finance","$20");
let Book2 = new Book("Harry Potter", Author2, "Fantasy", "$25.99");

Book1.getBookInfo();
Book2.getBookInfo();



// Book2.getBookInfo();


// console.log(Book2)



