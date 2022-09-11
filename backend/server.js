const server = require("./app");
const port = 3000;
const express = require("express")
const app = express();
const fs = require("fs");

const https = require('https');
const server2 = https.createServer({
  cert: fs.readFileSync(__dirname + '/.ssl/' + 'capsalpha.live.crt'),
  key: fs.readFileSync(__dirname + '/.ssl/' + 'capsalpha.live.key')
}, app);

app.use(express.static("./public"))
server2.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});