const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const app = express();
app.get("/", (req, res) => {
  res.send("<h2>Hi there!!!!</h2>");
});

app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});
