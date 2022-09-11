require("dotenv").config()
require("express-async-errors");

//const indexRoute = require("./routes/index");

const path = require("path");
const fs = require('fs');

const express = require('express');
const app = express();

// Create SSL for localhost
// openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out capsalpha.live.crt -keyout capsalpha.live.key
/* 
const https = require('https');
const server = https.createServer({
  cert: fs.readFileSync(__dirname + process.env.PATHSSL + 'capsalpha.live.crt'),
  key: fs.readFileSync(__dirname + process.env.PATHSSL + 'capsalpha.live.key')
}, app);
 */

const http = require('http');
const server = http.createServer(app);

const cors = require("cors");
const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");
const { process_params } = require("express/lib/router");



////////////////////////////////////////////////////////////////////////////////
// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const allowedOrigins = ["*"];

// const options = {
//   origin: allowedOrigins,
// };
// app.use(cors(options));

app.use((err, req, res, next) => {
  console.log(err);
  if (err && err.status) {
    res.status(err.status).send({
      data: err.name,
      message: err.message,
      status: err.status,
    });
  } else {
    res.status(500).send({
      data: "InternalServerError",
      message: "Something when wrong",
      status: 500,
    });
  }
  next();
});

////////////////////////////////////////////////////////////////////////////////
// HTTP Server

app.use("/", indexRoute);
app.use("/user", userRoute);

////////////////////////////////////////////////////////////////////////////////
// Export HTTP Server

module.exports = server;