const fetch = require("node-fetch");

const getAllAnimals = async (req, res, next) => {
  // in requesting access to users, this network request is literally just setting the response json to be called users with the value of the DUMMY_USERS
  const catsProtectionResponse = await fetch(
    "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false"
  );
  const catsProtectionData = await catsProtectionResponse.json();

  const blueCrossCatResponse = await fetch(
    "https://www.bluecross.org.uk/pet/listing/cat"
  );
  const blueCrossCatData = await blueCrossCatResponse.json();

  const blueCrossDogResponse = await fetch(
    "https://www.bluecross.org.uk/pet/listing/dog"
  );
  const blueCrossDogData = await blueCrossDogResponse.json();

  const batterseaDogsResponse = await fetch(
    "https://www.battersea.org.uk/api/animals/dogs"
  );

  const batterseaDogsData = await batterseaDogsResponse.json();

  res.json({
    cats_protection: await catsProtectionData,
    blue_cross_cat: await blueCrossCatData.results,
    blue_cross_dog: await blueCrossDogData.results,
    battersea_dogs: await batterseaDogsData,
  });
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
