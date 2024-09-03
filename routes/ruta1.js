const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/logMiddleware');

router.get('/ruta1', logMiddleware, (req, res) => {
    res.send('Ruta 1');
});

module.exports = router;