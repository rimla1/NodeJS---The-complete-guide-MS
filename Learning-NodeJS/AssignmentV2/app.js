const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Middleware number 1')
    next();
})

app.use((req, res, next) => {
    console.log('Middleware number 2')
    res.send('<h1>Welcome!</h1>')
})

app.listen(3333);