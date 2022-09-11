const server = require("./app");
const port = 3000;
const express = require("express")
const app = express();
const cors = require("cors")
// const Redis = require("ioredis");
// const redis = new Redis();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use(express.static("./public"))

// app.post("/save", (req, res) => {
//   console.log(req.body)
//   try {
//     redis.set("test", req.body.ops[0].insert)
//     res.json({saved: true})
//   } catch (e) {
//     res.status(500)
//     res.send("erro")
//   }
// })

// app.get("/get-document", async (req, res) => {
//   document = await redis.get("test") || ""
//   console.log(document)
//   res.json({ ops: [ {insert: document} ] })
// })

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});