const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch(
    "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false"
  );
  const data = await response.json();
  res.json(await data);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

//could deploy server to something like heroku then use the url for fetch calls.
