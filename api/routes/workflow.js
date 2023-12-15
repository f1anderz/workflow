const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

});

router.get('/:id', (req, res, next) => {

});

router.post('/', (req, res, next) => {

});

router.patch('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `DELETE workflow ${req.params.id}`
    });
});

module.exports = router;