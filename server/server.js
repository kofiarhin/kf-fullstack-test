const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// setup middleware
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

app.get("/api/users", (req, res) => {
  return res.json([
    { name: "kofi arhin", email: "kofiarhin@gmail.com" },
    { neme: "lebron james", email: "lebron@gmail.com" },
  ]);
});

app.listen(port, () => console.log("server started"));
