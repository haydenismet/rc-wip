const e = require("express");
const fetch = require("node-fetch");

//// NETWORK FETCH LIST ////
// Using this says only absolute URLs are supported when applied in the get request, seek halps //
const CHARITY_NETWORK_REQUESTS = [
  {
    charity_name: "cats protection",
    fetch_url:
      "https://www.cats.org.uk/umbraco/surface/catsearch/searchcats?longitude=-2.01580047607422&latitude=52.4455108642578&withCats=false&withDogs=false&withChildren=false&withFamilies=false&indoorsOnly=false",
  },
  {
    charity_name: "blue cross",
    fetch_url: "https://www.bluecross.org.uk/pet/listing/cat",
  },
  {
    charity_name: "blue cross",
    fetch_url: "https://www.bluecross.org.uk/pet/listing/dog",
  },
  {
    charity_name: "battersea dogs home",
    fetch_url: "https://www.battersea.org.uk/api/animals/dogs",
  },
];

///////////// LOOP EXPERIMENT /////////////
// Loop experiment doesnt work as it requires the ALL_DATA to be outside the .get, which then means the data is duplicated on call of the request again Could use promise.allsettled as not all will return. seek halps //

// const ALL_DATA = [];
// async function NETWORK_SETUP(fetcher) {
//   try {
//     const networkCall = await fetch(fetcher);

//     const networkData = await networkCall.json();

//     const results = ALL_DATA.push(networkData);

//     return results;
//   } catch (e) {
//     console.log(fetcher, " network request error");
//   }
// }

const getAllAnimals = async (req, res, next) => {
  //////////////// LOOP EXP CONTINUED ///////////
  // CHARITY_NETWORK_REQUESTS.forEach((url, index) => {
  //   return NETWORK_SETUP(url.fetch_url);
  // });
  ///////////////////////////////////////////////

  ///////////////// WORKING NON LOOP EXPERIMENT ///////////////////
  const ALL_DATA = [];
  // // LIMIT TO FIRST 10 CALLS ONLY
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
    all_data: ALL_DATA,
  });
};

// GET ALL BLUE CROSS
const getAllBlueCross = async (req, res, next) => {
  const ALL_DATA = [];
  try {
    const blueCrossCatResponse = await fetch(
      "https://www.bluecross.org.uk/pet/listing/cat"
    );
    const blueCrossCatData = await blueCrossCatResponse.json();
    ALL_DATA.push(blueCrossCatData.results);
  } catch (e) {
    console.log("Blue Cross Cat Data Error " + e);
  }

  try {
    const blueCrossDogResponse = await fetch(
      "https://www.bluecross.org.uk/pet/listing/dog"
    );
    const blueCrossDogData = await blueCrossDogResponse.json();
    ALL_DATA.push(blueCrossDogData.results);
  } catch (e) {
    console.log("Blue Cross Dog Data Error " + e);
  }
  res.json({
    all_data: ALL_DATA,
  });
};

//////////////////////// FILTERS ////////////////////////////

// Can you do like a filterisation so you call all on page load and then filtered topics are all like your ‘own’ api calls but really it’s just a manipulation of the data? Ie if filter → dogs is clicked then it’s the results of the already called all-animals but filtered to dogs only. But before this you standardize all of the results like species = cat etc. So doing it in back end instead of front and utilizing express to do heavy work - GOES IN CONTROLLERS

// to export multiples dont use module.exports, use (but dont execute with (), just passing reference) :
exports.getAllAnimals = getAllAnimals;
exports.getAllBlueCross = getAllBlueCross;
