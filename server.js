const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now using nodemon to update server after every save.");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
