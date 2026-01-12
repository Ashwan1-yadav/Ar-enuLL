const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middlewares/error.middleware");
const contactUsRoute = require("./routes/contactUs.route");
const adminRoute = require("./routes/admin.route");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors(
    {
        origin: [process.env.BASE_URL, process.env.ADMIN_BASE_URL],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    } 
));
app.use(morgan("dev"));

app.use("/api/v1", contactUsRoute);
app.use("/api/admin", adminRoute);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello From Ar$eNuLL Backend");
});


module.exports = app;
