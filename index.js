const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

const userRoute = require("./routes/userRoute");

dotenv.config();
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors);

app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Node Server Running`);
});
