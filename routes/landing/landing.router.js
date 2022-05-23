const { landingPage } = require("./landing.controller");

const router = require("express").Router();

router.get("/", landingPage);

module.exports = router;
