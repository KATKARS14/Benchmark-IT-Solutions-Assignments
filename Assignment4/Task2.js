const bookLibrary = {
    books: [],

    addBook(book) {
        this.books.push(book);
    },

    getBookByAuthor(author) {
        return this.books.filter(book => book.author === author);
    },

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    },

    getAllBooks() {
        return this.books.map(book => book.title);
    }

};

bookLibrary.addBook({ title: "ABC", author: "BCA", year: 2000 });
bookLibrary.addBook({ title: "ABC1", author: "BCA1", year: 2000 });
bookLibrary.addBook({ title: "AB2", author: "BCA2", year: 2000 });
bookLibrary.addBook({ title: "ABC3", author: "BCA3", year: 2000 });

console.log("Book bt Author BCA1", bookLibrary.getBookByAuthor("BCA1"));

console.log("Books- ", bookLibrary.getAllBooks());

bookLibrary.removeBook("ABC");
console.log("Book Removed");

console.log("Updated List-", bookLibrary.getAllBooks());