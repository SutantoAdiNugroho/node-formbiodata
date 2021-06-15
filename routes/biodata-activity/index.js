const router = require("express").Router();
const controller = require("./controller");

router.post("/postbio", controller.drvPickupOrder);
router.get("/list/bio", controller.drvListOrder);

module.exports = router;
