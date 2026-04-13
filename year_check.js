const validateYear = (req, res, next) => {
  const { year } = req.body;

  if (year !== undefined) {
    if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
      return res.status(400).json({
        message: "Invalid year"
      });
    }
  }

  next();
};
router.post("/", validateYear, (req, res) => {
  // create book
});