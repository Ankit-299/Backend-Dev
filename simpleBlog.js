const express = require("express");
const app = express();

let posts = [

 { id: 1, title: "First Post" }

];

app.get("/blog", (req, res) => {

 res.send(posts);

});

app.listen(3000);
