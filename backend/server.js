const express = require("express");
const app = express();

const cors = require("cors");

//import your route (i.e animals api for use by server.js) Acts like middleware now its been imported via .use
const animalRoutes = require("./routes/animals-routes");

app.use(cors());

//to json (like body-parser)
app.use(express.json());

//get the api setup routes via /api/animals for animals
app.use("/api/animals", animalRoutes);

app.listen(4000, () => {
  console.log("listening on port 4000");
});

//could deploy server to something like heroku then use the url for fetch calls.
