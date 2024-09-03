const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/logMiddleware');


router.get('/ruta2', logMiddleware,(req, res) => {
    res.send('Estas en la ruta 2');
});

module.exports = router;