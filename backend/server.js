const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("https://www.bluecross.org.uk/pet/listing/cat");
  const data = await response.json();
  res.json(await data);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

//could deploy server to something like heroku then use the url for fetch calls.
