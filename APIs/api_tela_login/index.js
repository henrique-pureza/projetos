const express = require("express");

const routes = require("./routes/routes");

const server = express();

const cors = require("cors");

server.use(
    express.urlencoded(
        {
            extended: true
        }
    ),
    cors(),
    express.json(),
    routes
);

module.exports = server;