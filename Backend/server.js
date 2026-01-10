require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/config.db");

connectDB();

app.listen(process.env.PORT,"0.0.0.0", () => {
  console.log(`Server running on port : ${process.env.PORT}`);
});
