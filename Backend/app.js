const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const testRoute = require("./routes/test.route");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/test", testRoute);
app.use(errorHandler);

module.exports = app;
