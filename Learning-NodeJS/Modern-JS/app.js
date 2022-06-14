const express = require("express");
const reqHandler = require("./reqHandler");

const app = express();

app.get("/", reqHandler);

app.listen(3000);
