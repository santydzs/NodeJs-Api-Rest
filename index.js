require('./config/config');
const routes = require('./config/routes');
const express = require('express');

const server = express();

server.get(routes.home, function(request, response){
    response.json('server works');
});

server.get(routes.math.multiply + '/:number', function(request, response){
    response.json(request.params.number * 2);
});

server.listen(process.env.PORT, function(){
    console.log('escuchando en puerto: ' + process.env.PORT);
})