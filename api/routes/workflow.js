const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET many workflows'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `GET one workflow ${req.params.id}`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST workflow'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: `PATCH workflow ${req.params.id}`
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `DELETE workflow ${req.params.id}`
    });
});

module.exports = router;