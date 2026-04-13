const express = require("express");
const router = express.Router();
// Sample data for books
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }  
];
router.get("/", (req, res) => {
  let { author, year } = req.query;
  let filteredBooks = [...books];

  if (author) {
    filteredBooks = filteredBooks.filter(book =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(book =>
      book.year === Number(year)
    );
  }

  res.json(filteredBooks);
});