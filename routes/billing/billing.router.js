const { postBilling } = require("./billing.controller");

const router = require("express").Router();

router.post("/", postBilling);

module.exports = router;
