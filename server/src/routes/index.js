const { Router } = require("express");
const pokemonRouter = require("./pokemonsRouter");
const typeRouter = require("./typesRouter");



const router = Router();

router.use("/pokemon", pokemonRouter);
router.use("/type", typeRouter);


module.exports = router;