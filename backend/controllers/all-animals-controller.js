const e = require("express");
const fetch = require("node-fetch");
const ALL_DATA = [];

const getAllAnimals = async (req, res, next) => {
  // LIMIT TO FIRST 10 CALLS ONLY
  try {
    const catsProtectionResponse = await fetch(
      "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false"
    );
    const catsProtectionData = await catsProtectionResponse.json();
    ALL_DATA.push({ cats_protection: catsProtectionData });
  } catch (e) {
    console.log("Cats Protection Data Error " + e);
  }

  try {
    const blueCrossCatResponse = await fetch(
      "https://www.bluecross.org.uk/pet/listing/cat"
    );
    const blueCrossCatData = await blueCrossCatResponse.json();
    ALL_DATA.push({ blue_cross_cat: blueCrossCatData });
  } catch (e) {
    console.log("Blue Cross Cat Data Error " + e);
  }

  try {
    const blueCrossDogResponse = await fetch(
      "https://www.bluecross.org.uk/pet/listing/dog"
    );
    const blueCrossDogData = await blueCrossDogResponse.json();
    ALL_DATA.push({ blue_cross_dog: blueCrossDogData });
  } catch (e) {
    console.log("Blue Cross Dog Data Error " + e);
  }

  try {
    const batterseaDogsResponse = await fetch(
      "https://www.battersea.org.uk/api/animals/dogs"
    );
    const batterseaDogsData = await batterseaDogsResponse.json();
    ALL_DATA.push({ battersea_dogs: batterseaDogsData });
  } catch (e) {
    console.log("Battersea Dogs Data Error " + e);
  }

  res.json({
    all_data: await ALL_DATA,
  });
};

// to export multiples dont use module.exports, use (but dont execute with (), just passing reference) :
exports.getAllAnimals = getAllAnimals;
