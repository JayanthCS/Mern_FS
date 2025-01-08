const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDb } = require("./config/db");

//dot env configuration
dotenv.config();

//DB connection
connectDb;

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Route

app.use("/api/v1/test", require("./routes/testRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to food server app</h1>");
});

//PORT//TX5OQifKSCZoSz0y
const PORT = 8080;

//Listen
app.listen(PORT, () => {
  console.log("server running at port 8080");
});
