const fs = require("fs");

const reqHandler = (req, res, next) => {
  fs.readFile("my-page.html", "utf8", (err, data) => {
    res.send(data);
  });
};

module.exports = reqHandler;
