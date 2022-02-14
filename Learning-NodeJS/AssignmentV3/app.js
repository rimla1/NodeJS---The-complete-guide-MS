const express = require("express");
const path = require('path')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(userRoutes)

app.use('/', (req, res, next) => {
    res.send('<h1>Error 404</h1>')
})

app.listen(3666);