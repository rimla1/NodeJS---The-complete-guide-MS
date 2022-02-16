const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const { addAbortSignal } = require('stream');

const PORT = 3210

const app = express();

// Pug Template
// app.set('view engine', 'pug')
// app.set('views', 'views')

// Handlebars Template
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// '/admin' is path for both requests, this is a shortcut
app.use('/admin', adminData.routes)

app.use(shopRoutes)

// catch all middlewares (path is / by default)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    // res.status(404).render('404', {docTitle: "Error 404 page not found"}) (Pug Template)
})



// const server = http.createServer(app);
// server.listen(3210)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});