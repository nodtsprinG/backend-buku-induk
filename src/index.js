const express = require("express");
const cors = require("cors");
const { Model } = require("sequelize");

const app = express();

app.use(cors());

app.listen(8080, async () => {
  console.log("App listen on port 8080");
  await Model.sync();
});
