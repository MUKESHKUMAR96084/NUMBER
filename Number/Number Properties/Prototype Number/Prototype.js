function book(title, author)
{
    this.title = title; 
    this.author = author;
}
var myBook = new book("Perl", "Mohtashim");
 book.prototype.price = null;
 myBook.price = 100;
 console.log("Book title is : " + myBook.title);
 console.log("Book author is : " + myBook.author);
 console.log("Book price is : " + myBook.price);