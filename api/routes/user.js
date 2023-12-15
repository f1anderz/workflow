const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.get('/', (req, res, next) => {
    User.find().exec().then(doc => {
        if (doc.length > 0) {
            res.status(200).json({
                status: true,
                users: doc
            });
        } else {
            res.status(404).json({
                status: false,
                message: `Users not found`
            });
        }
    }).catch(err => {
        res.status(500).json({
            status: false,
            message: err
        });
    });
});

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id).exec().then(doc => {
        if (doc) {
            res.status(200).json({
                status: true,
                user: doc
            });
        } else {
            res.status(404).json({
                status: false,
                message: `User with id = ${req.params.id} not found`
            });
        }
    }).catch(err => {
        res.status(404).json({
            status: false,
            message: err
        });
    });
});

router.post('/', async (req, res, next) => {
    await bcrypt.hash(req.body.password, 10, async (err, hash) => {
        let user = new User({
            name: req.body.name,
            nickname: req.body.nickname,
            login: req.body.login,
            password: hash,
            company: req.body.company
        });
        await user.save().then(response => {
            res.status(201).json({
                status: true,
                insertId: response._id
            });
        }).catch(err => {
            res.status(500).json({
                status: false,
                message: err.message
            });
        });
    });
});

router.patch('/:id', async (req, res, next) => {
    await bcrypt.hash(req.body.password, 10, async (err, hash) => {
        let doc = await User.findById(req.params.id)
        doc.name = req.body.name;
        doc.nickname = req.body.nickname;
        doc.login = req.body.login;
        doc.password = hash;
        doc.company = req.body.company;
        await doc.save().then(result => {
            res.status(200).json({
                status: true,
                message: result
            });
        }).catch(err => {
            res.status(500).json({
                status: false,
                message: err
            });
        });
    });
});

router.delete('/:id', (req, res, next) => {
    User.deleteOne({_id: req.params.id}).exec().then(result => {
        res.status(200).json({
            status: true,
            message: result
        });
    }).catch(err => {
        res.status(500).json({
            status: false,
            message: err
        });
    });
});

module.exports = router;