const express = require('express');

const mainRoutes = require('./routes/index')

const app = express()

app.use(mainRoutes)



app.listen(7777)