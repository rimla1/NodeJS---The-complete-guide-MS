const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const { addAbortSignal } = require('stream');

const PORT = 3210

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// '/admin' is path for both requests, this is a shortcut
app.use('/admin', adminData.routes)

app.use(shopRoutes)

// catch all middlewares (path is / by default)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



// const server = http.createServer(app);
// server.listen(3210)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});