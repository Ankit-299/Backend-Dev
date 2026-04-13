const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

app.use(xss());
app.use(mongoSanitize());