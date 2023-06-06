const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());

const dataRoutes = require("./routes/DataRoutes");

app.use("/data", dataRoutes);

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
