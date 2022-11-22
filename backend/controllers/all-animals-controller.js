const e = require("express");
const fetch = require("node-fetch");

//// NETWORK FETCH LIST ////

const CHARITY_NETWORK_REQUESTS = {
  catsProtectionCats:
    "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false",
  blueCrossCats: "https://www.bluecross.org.uk/pet/listing/cat",
  blueCrossDogs: "https://www.bluecross.org.uk/pet/listing/dog",
  batterseaDogs: "https://www.battersea.org.uk/api/animals/dogs",
};

//GET ALL CHARITY NETWORK REQS
const getAllAnimals = async (req, res, next) => {
  const ALL_DATA = [];

  // LIMIT TO FIRST 10 CALLS ONLY
  try {
    const catsProtectionResponse = await fetch(
      CHARITY_NETWORK_REQUESTS.catsProtectionCats
    );
    const catsProtectionData = await catsProtectionResponse.json();
    ALL_DATA.push({ cats_protection: catsProtectionData });
  } catch (e) {
    console.log("Cats Protection Data Error " + e);
  }

  try {
    const blueCrossCatResponse = await fetch(
      CHARITY_NETWORK_REQUESTS.blueCrossCats
    );
    const blueCrossCatData = await blueCrossCatResponse.json();
    ALL_DATA.push({ blue_cross_cat: blueCrossCatData });
  } catch (e) {
    console.log("Blue Cross Cat Data Error " + e);
  }

  try {
    const blueCrossDogResponse = await fetch(
      CHARITY_NETWORK_REQUESTS.blueCrossDogs
    );
    const blueCrossDogData = await blueCrossDogResponse.json();
    ALL_DATA.push({ blue_cross_dog: blueCrossDogData });
  } catch (e) {
    console.log("Blue Cross Dog Data Error " + e);
  }

  try {
    const batterseaDogsResponse = await fetch(
      CHARITY_NETWORK_REQUESTS.batterseaDogs
    );
    const batterseaDogsData = await batterseaDogsResponse.json();
    ALL_DATA.push({ battersea_dogs: batterseaDogsData });
  } catch (e) {
    console.log("Battersea Dogs Data Error " + e);
  }

  res.json({
    all_data: ALL_DATA,
  });
};

// GET ALL BLUE CROSS

const getAllBlueCross = async (req, res, next) => {
  const ALL_DATA = [];
};

//////////////////////// FILTERS ////////////////////////////

// Can you do like a filterisation so you call all on page load and then filtered topics are all like your ‘own’ api calls but really it’s just a manipulation of the data? Ie if filter → dogs is clicked then it’s the results of the already called all-animals but filtered to dogs only. But before this you standardize all of the results like species = cat etc. So doing it in back end instead of front and utilizing express to do heavy work - GOES IN CONTROLLERS

// to export multiples dont use module.exports, use (but dont execute with (), just passing reference) :
exports.getAllAnimals = getAllAnimals;
