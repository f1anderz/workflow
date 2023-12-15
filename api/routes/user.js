const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET many users'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `GET one user ${req.params.id}`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST user'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: `PATCH user ${req.params.id}`
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `DELETE user ${req.params.id}`
    });
});

module.exports = router;