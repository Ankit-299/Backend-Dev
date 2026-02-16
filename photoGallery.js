const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/gallery", (req, res) => {

 res.send("Photo Gallery");

});

app.listen(3000);
