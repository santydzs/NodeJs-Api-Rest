import bodyParser from "body-parser";
import express from "express";
import Db from "../Mongo/mongoDriver";
import Routes from "./routes";

const App = express();
App.use(bodyParser.json({type: "application/json"}));

export default {
    Routes,
    Db,
    App,
};
