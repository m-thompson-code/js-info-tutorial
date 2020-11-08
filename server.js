const path = require('path');
const express = require("express");
const http = require('http');
const socketIO = require('socket.io');

exports.createServer = () => {
    const app = express();
    const server = http.createServer(app);
    const io = socketIO(server);

    const HOST = "127.0.0.1";
    const PORT = 8080;
    const APP_PATH = path.join(__dirname + '/app');

    // Log requests
    app.use('*', (req, res, next) => {
        console.log(` ~ express server: request: ${req.originalUrl}`);
        next();
    });

    app.use(express.static(APP_PATH));

    server.listen(PORT, HOST, (() => {
        console.log(` ~ express server: listening at ${HOST}:${PORT}`);
    }));

    return {
        server: server,
        io: io,
    };
};
