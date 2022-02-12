const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('/users Middleware');
    res.send('<p>The Middleware for /users path</p>')
});

app.use('/', (req, res, next) => {
    console.log('/ Middleware');
    res.send('<p>The Middleware for / path</p>')
})

app.listen(3334)