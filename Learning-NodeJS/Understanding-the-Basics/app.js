const http = require("http")

const routes = require('./routes');

cons server = http.createServer(routes.handler);


server.listen(3100);