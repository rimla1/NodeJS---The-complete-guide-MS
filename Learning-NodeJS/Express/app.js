const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="titleOfProduct"><button type="submit">Add product</button></form>');
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Home page with path "/"</h1>');
})


// const server = http.createServer(app);
// server.listen(3210)

app.listen(3210);