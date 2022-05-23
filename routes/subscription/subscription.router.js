const { subscriptionQuery } = require("./subscription.controller");

const router = require("express").Router();

router.post("/", subscriptionQuery);

module.exports = router;
