// express needed in each file, has to be imported, similar to React.
const express = require("express");

//this imports my controllers as one, and i can reference as animalsControllers.controller1, - as seen below at router.get().
const animalsControllers = require("../controllers/all-animals-controller");

// Router is an instance of the express router.
// We use it to define our routes for handling routes, i.e the API get/post response/request.
const router = express.Router();

//order matters - it will hit first endpoint i.e /:aid, then subsequent routes. As the first route doesn't have  a specific route i.e creator/:cid it will always hit the most generic/open route first at /:aid. Perhaps have more structured routes so they dont get consumed by more generic ones? For example, have changed it to be /pet/:aid so it doesnt hit a more open ended route first.

//order goes by matching of URL string. So if no size is specified in getBySize, it will return the first which is just by type.

//GET ALL ANIMALS
router.get("/all-animals", animalsControllers.getAllAnimals);

///////////////////////// ORGANISATIONS /////////////////////

//GET ALL BLUE CROSS PETS

//GET BLUE CROSS DOGS

//GET BLUE CROSS CATS

//GET BATTERSEA DOGS

//GET CATS PROTECTION

/////////////////////////////////////////////////////////////

//////////////////////// FILTERS ////////////////////////////

// Can you do like a filterisation so you call all on page load and then filtered topics are all like your ‘own’ api calls but really it’s just a manipulation of the data? Ie if filter → dogs is clicked then it’s the results of the already called all-animals but filtered to dogs only. But before this you standardize all of the results like species = cat etc. So doing it in back end instead of front and utilizing express to do heavy work - GOES IN CONTROLLERS

/////////////////////////////////////////////////////////////

module.exports = router;
