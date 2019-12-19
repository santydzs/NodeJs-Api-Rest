require('./config/config');
const app = require('./config/middleware');
app.Db.conectDb();

app.server.get(app.routes.home, function(request, response){
    response.json('server works');
});

app.server.get(app.routes.math.multiply + '/:number', function(request, response){
    response.json(request.params.number * 2);
});

app.server.post(app.routes.phone, function(request, response){
    try{
        let id = app.Db.createPhone(request.body);
        response.status(200).json(id);
    }
    catch(error){
        response.status(400).json(error);
    }
});

app.server.listen(process.env.PORT, function(){
    console.log('escuchando en puerto: ' + process.env.PORT);
})