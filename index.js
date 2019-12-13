require('./config/config');
const dependecy = require('./config/AppRequires');
dependecy.Db.conectDb();

dependecy.server.get(dependecy.routes.home, function(request, response){
    response.json('server works');
});

dependecy.server.get(dependecy.routes.math.multiply + '/:number', function(request, response){
    response.json(request.params.number * 2);
});

dependecy.server.listen(process.env.PORT, function(){
    console.log('escuchando en puerto: ' + process.env.PORT);
})