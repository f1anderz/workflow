const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();

const key = process.env.API_KEY;

const routes = {
    user: require('./api/routes/user'),
    workspace: require('./api/routes/workspace'),
    workflow: require('./api/routes/workflow')
}

mongoose.connect('mongodb://' + process.env.DBHOST + '/' + process.env.DATABASE);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    bcrypt.compare(req.headers["x-api-key"], key, (err, response) => {
        if (response) {
            next();
        } else {
            return res.status(401).json({
                status: false,
                message: "No API authorization"
            })
        }
    });
})

app.use('/users', routes.user);
app.use('/workspaces', routes.workspace);
app.use('/workflows', routes.workflow);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;