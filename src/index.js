const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// route
const authControllers = require("./routes/AuthController");
const userControllers = require("./routes/UserControllers");
const akunControllers = require("./routes/Admin/AdminAccountController");

// middleware
const { AuthMiddlewareSiswa, AuthMiddlewareAdmin } = require("./middleware/AuthMiddleware");

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authControllers);
app.use("/siswa", AuthMiddlewareSiswa, userControllers);
app.use("/admin", AuthMiddlewareAdmin, akunControllers);

app.listen(8080, async () => {
  console.log("App listen on port 8080");
});
