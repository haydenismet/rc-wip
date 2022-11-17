const fetch = require("node-fetch");

const getAllAnimals = async (req, res, next) => {
  // in requesting access to users, this network request is literally just setting the response json to be called users with the value of the DUMMY_USERS
  const response = await fetch(
    "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false"
  );
  const data = await response.json();
  res.json({ cats_protection: await data });
};

// to export multiples dont use module.exports, use (but dont execute with (), just passing reference) :
exports.getAllAnimals = getAllAnimals;

//app.get("/all-animals", async (req, res) => {
//  const response = await fetch(
//  "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false"
//);
//const data = await response.json();
//res.json(await data);
//});
