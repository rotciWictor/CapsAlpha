const server = require("./app");
const port = 3000;
express = require("express")
app = express();

app.use(express.static("./public"))
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});