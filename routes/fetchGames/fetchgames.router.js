const {
  fetchGames,
  fetchGamesById,
  fetchGamesByOthers,
} = require("./fetchgames.controller");

const router = require("express").Router();

router.get("/", fetchGames);
router.get("/:id", fetchGamesById);
router.get("/others/:id", fetchGamesByOthers);

module.exports = router;
