const routes = require('./routes');
const Db = require('../DbLayer/mongoDriver');
const express = require('express');

const server = express();

module.exports = {
    routes,
    Db,
    server
}