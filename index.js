require('dotenv').config();
const express = require("express");
const app = express();

const indexRoutes = require('./routes');
const profileRoutes = require('./routes/profileRoutes');

app.set("port", 8080);
app.set("ip", "0,0,0,0");

app.use("/", indexRoutes);
app.use("/profile", profileRoutes);

app.get("*", (req, res) => {
    return res.send("Error 404, page not found!");
});

app.listen(app.get("port"), app.get("ip"), (err) => {
  if (err) {
    throw Error;
  } else {
    console.log("running on port 8080");
  }
});
