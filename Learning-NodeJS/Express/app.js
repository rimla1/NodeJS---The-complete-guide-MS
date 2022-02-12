const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();



app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)

app.use(shopRoutes)

// catch all middlewares (path is / by default)
app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404</h1>')
})



// const server = http.createServer(app);
// server.listen(3210)

app.listen(3210);