import PhoneController from "./Controllers/PhoneController";
import app from "./middleware";

const phoneCrt = new PhoneController();

app.route("/").get( (req, res) => {
    res.json("server works");
});

app.route("/phone").get( (req, res) => {
    return phoneCrt.Add(req);
});
