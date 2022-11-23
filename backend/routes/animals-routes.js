const express = require("express");
const animalsControllers = require("../controllers/all-animals-controller");
const router = express.Router();

//GET ALL ANIMALS
router.get("/all-animals", animalsControllers.getAllAnimals);

module.exports = router;
