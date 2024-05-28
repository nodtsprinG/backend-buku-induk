const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

initModels
app.listen(8080, () => console.log("App listen on port 8080"));
