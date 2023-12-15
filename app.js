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

module.exports = app;