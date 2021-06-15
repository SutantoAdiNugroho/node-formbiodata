const router = require("express").Router();
const controller = require("./controller");

router.post("/postbio", controller.drvPickupOrder);

module.exports = router;
