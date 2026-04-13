// GET /books/search?title=harry
router.get("/search", (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ message: "Title query required" });
  }

  const results = books.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(results);
});