const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware');
    res.send('<p>Assignment solved (almost)</p>')
})

app.listen(3334)