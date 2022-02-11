const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page!</h1>')
})

app.listen(3333);