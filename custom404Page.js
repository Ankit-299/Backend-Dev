const express = require("express");
const app = express();

app.use((req, res) => {

 res.status(404).send("404 Page Not Found");

});

app.listen(3000);
