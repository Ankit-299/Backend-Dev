let authors = [
    { id: 1, name: "F. Scott Fitzgerald" },
    { id: 2, name: "Harper Lee" },
    { id: 3, name: "George Orwell" },
    { id: 4, name: "Jane Austen" },
    { id: 5, name: "J.D. Salinger" }
];
router.post("/authors", (req, res) => {
  const newAuthor = {
    id: Date.now(),
    name: req.body.name
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});
router.get("/authors", (req, res) => {
  res.json(authors);
});
router.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ message: "Not found" });

  res.json(author);
});
router.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ message: "Not found" });

  author.name = req.body.name;
  res.json(author);
});
router.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.json({ message: "Deleted" });
});