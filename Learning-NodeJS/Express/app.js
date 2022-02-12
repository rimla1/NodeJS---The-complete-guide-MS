const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorRoutes = require('./routes/error')

const app = express();



app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)

app.use(shopRoutes)

app.use(errorRoutes)



// const server = http.createServer(app);
// server.listen(3210)

app.listen(3210);