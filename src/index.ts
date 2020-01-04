import app from "./middleware";
import phoneController from "./Controllers/PhoneController";

let phoneCrt = new phoneController();

app.get('/', function(req, res) {
    res.json("server works");
});

app.route('/phone').get();
