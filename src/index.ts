require("./config/config");
import app from "./config/middleware";
const db = new app.Db();

app.App.get(app.Routes.home, function(request, response) {
    response.json("server works");
    db.conectDb();
});

app.App.get(app.Routes.math.multiply + "/:number", function(request, response) {
    response.json(parseFloat(request.params.number) * 2);
});

app.App.post(app.Routes.phone, function(request, response) {

    try {
        const id = db.createPhone(request.body);
        response.status(200).json(id);
    } catch (error) {
        response.status(400).json(error);
    }
});

app.App.listen(process.env.PORT, function() {
    console.log("escuchando en puerto: " + process.env.PORT);
});
