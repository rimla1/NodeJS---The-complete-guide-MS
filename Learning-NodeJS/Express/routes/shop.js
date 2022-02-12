const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Home page with path "/"</h1>');
})

module.exports = router