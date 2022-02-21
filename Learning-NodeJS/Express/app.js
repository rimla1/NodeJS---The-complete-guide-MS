const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')
const { addAbortSignal } = require('stream');

const PORT = 3210

const app = express();


// Ejs Template
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// '/admin' is path for both requests, this is a shortcut
app.use('/admin', adminRoutes)

app.use(shopRoutes)


// catch all middlewares (path is / by default)
app.use(errorController.get404)



app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});