const express = require("express");
const cors = require("cors");
const { Model } = require("sequelize");

const app = express();

// route
const authControllers = require("./routes/AuthController");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.use("/Auth", authControllers);

app.listen(8080, async () => {
  console.log("App listen on port 8080");
});
