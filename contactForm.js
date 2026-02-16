const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {

 res.send(`
 <form method="POST">
 <input name="name">
 <button>Submit</button>
 </form>
 `);

});

app.post("/contact", (req, res) => {

 console.log(req.body);

 res.send("Form Submitted");

});

app.listen(3000);
