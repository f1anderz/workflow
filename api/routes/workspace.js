const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET many workspaces'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `GET one workspace ${req.params.id}`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST workspace'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: `PATCH workspace ${req.params.id}`
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `DELETE workspace ${req.params.id}`
    });
});

module.exports = router;