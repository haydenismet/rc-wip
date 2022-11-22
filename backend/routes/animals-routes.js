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
router.get("/blue-cross", animalsControllers.getAllBlueCross);

//GET BLUE CROSS DOGS
//router.get("/blue-cross-dogs", animalsControllers.getBlueCrossDogs);

//GET BLUE CROSS CATS
//router.get("/blue-cross-cats", animalsControllers.getBlueCrossCats);

//GET BATTERSEA DOGS
//router.get("/battersea", animalsControllers.getBattersea);

//GET CATS PROTECTION
//router.get("/cats-protection", animalsControllers.getCatsProtection);

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

module.exports = router;
