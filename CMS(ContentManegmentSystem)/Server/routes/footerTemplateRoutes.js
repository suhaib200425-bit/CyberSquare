const express = require("express");
const createFooterTemplate = require("../controllers/FooterTemplate/createFooterTemplate");
const getallFooterTemplate = require("../controllers/FooterTemplate/getallFooterTemplate");
const toggelFooterTemplate = require("../controllers/FooterTemplate/toggelFooterTemplate");
const getcheckedFooterTemplate = require("../controllers/FooterTemplate/getcheckedFooterTemplate");
const updateFooterTemplate = require("../controllers/FooterTemplate/updateFooterTemplate");
const deleteFooterTemplate = require("../controllers/FooterTemplate/deleteFooterTemplate");
const router = express.Router();


router.post("/", createFooterTemplate);
router.get("/", getallFooterTemplate);
router.patch("/checked/:FooterId",toggelFooterTemplate)
router.get("/checked",getcheckedFooterTemplate)
// router.get("/:id", getNavbarById);
router.patch("/:FooterId", updateFooterTemplate);
router.delete("/:FooterId", deleteFooterTemplate);

module.exports = router;