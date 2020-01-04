import bodyParser from "body-parser";
import express from "express";

const Server = express();

// port
process.env.PORT = process.env.PORT || "3000";

// parser for application/json request body
Server.use(bodyParser.json({type: "application/json"}));

Server.listen(process.env.PORT);

export default Server;
