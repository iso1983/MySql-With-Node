const path = require("path");
// Sets environment variables on PROCESS.ENV object
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json()); //PArse json bodies in the request object

app.use("/posts",postRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).send("Error Something went wrong");
});

app.listen(process.env.PORT, () => {
  console.log("listening to port " + process.env.PORT);
});
