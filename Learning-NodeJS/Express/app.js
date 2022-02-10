
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware')
    next();
})

app.use((req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello from express</h1>');
})


// const server = http.createServer(app);
// server.listen(3210)

app.listen(3210);