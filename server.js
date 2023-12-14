const express = require("express");
const studentRoutes = require("./src/students/routes");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/", studentRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
