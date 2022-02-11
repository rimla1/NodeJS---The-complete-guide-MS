const express = require('express');

const app = express();


app.use('/add-product', (req, res, next) => {
    console.log('in add-product middleware');
    res.send('<h1>Add product page with path "/add-product"</h1>');
})

app.use('/', (req, res, next) => {
    console.log('in the main middleware');
    res.send('<h1>Home page with path "/"</h1>');
})




// const server = http.createServer(app);
// server.listen(3210)

app.listen(3210);