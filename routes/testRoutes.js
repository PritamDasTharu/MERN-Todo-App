const express = require("express");
const { testingController } = require("../controllers/testController");

const router = express.Router();

router.get("/test", testingController);
module.exports = router;
