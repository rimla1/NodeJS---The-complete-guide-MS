const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const PORT = 3210

const app = express();



app.use(bodyParser.urlencoded({extended: false}))

// '/admin' is path for both requests, this is a shortcut
app.use('/admin', adminRoutes)

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