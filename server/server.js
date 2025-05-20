const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// setup middleware
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

app.listen(port, () => console.log("server started"));
