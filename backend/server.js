const express = require("express");
const app = express();
const cors = require("cors");
const animalRoutes = require("./routes/animals-routes");

app.use(cors());
app.use(express.json());
app.use("/api", animalRoutes);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
