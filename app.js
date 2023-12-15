const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = {
    user: require('./api/routes/user'),
    workspace: require('./api/routes/workspace'),
    workflow: require('./api/routes/workflow')
}

app.use(morgan('dev'));

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