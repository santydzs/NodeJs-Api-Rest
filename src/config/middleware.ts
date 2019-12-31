import Routes from './routes';
import Db from '../Mongo/mongoDriver';
import express from "express";
import bodyParser from "body-parser";

const App = express();
App.use(bodyParser.json({type: 'application/json'}));

export default {
    Routes,
    Db,
    App
}