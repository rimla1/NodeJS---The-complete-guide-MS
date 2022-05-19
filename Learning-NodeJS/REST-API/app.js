const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/messages?retryWrites=true&w=majority`;

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>

app.use(bodyParser.json()); // application/json

// Solving CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Every website is allowed
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ); // Methods that we can use
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => app.listen(8080))
  .catch((err) => console.log(err));
