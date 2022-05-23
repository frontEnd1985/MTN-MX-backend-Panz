const { getAccessToken, redirectUser } = require("./redirect.controller");

const router = require("express").Router();

// router.get("/", getAccessToken);
router.get("/", redirectUser);

module.exports = router;

// http://api.panzcon.com/billing
// http://api.panzcon.com/subscription
// http://api.panzcon.com/landing
