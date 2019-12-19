const routes = require('./routes');
const Db = require('../Mongo/mongoDriver');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json({type: 'application/json'}));

module.exports = {
    routes,
    Db,
    server
}