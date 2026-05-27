const express = require("express");
const { getWebsiteByName } = require("../controllers/WEB/getWebsiteByName");
const router = express.Router();


router.get("/:WebName", getWebsiteByName);

module.exports = router;