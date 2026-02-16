const express = require("express");
const app = express();

app.use((req, res, next) => {

 const start = Date.now();

 res.on("finish", () => {

  const end = Date.now();

  console.log("Response Time:", end - start, "ms");

 });

 next();

});

app.get("/", (req, res) => {

 res.send("Home Page");

});

app.listen(3000);
