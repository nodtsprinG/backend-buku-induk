const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// route
const authControllers = require("./routes/AuthController");
const userControllers = require("./routes/UserControllers");

// middleware
const { AuthMiddlewareSiswa } = require("./middleware/AuthMiddleware");
const morgan = require("morgan");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/auth", authControllers);
app.use("/siswa", AuthMiddlewareSiswa, userControllers);

app.listen(8080, async () => {
  console.log("App listen on port 8080");
});
