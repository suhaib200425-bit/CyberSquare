const express = require("express");
const router = express.Router();

const createNavbarTemplate = require("../controllers/NavbarTemplate/createNavbarTemplate");
const getallNavbarTemplate = require("../controllers/NavbarTemplate/getallNavbarTemplate");
const updateNavbarTemplate = require("../controllers/NavbarTemplate/updateNavbarTemplate");
const deleteNavbarTemplate = require("../controllers/NavbarTemplate/deleteNavbarTemplate");
const toggelNavbarTemplate = require("../controllers/NavbarTemplate/toggelNavbarTemplate");
const getCheckedNavbarTemplate = require("../controllers/NavbarTemplate/getcheckedNavbarTemplate");

router.post("/", createNavbarTemplate);
router.get("/", getallNavbarTemplate);
router.patch("/checked/:NavbarId",toggelNavbarTemplate)
router.get("/checked",getCheckedNavbarTemplate)
// router.get("/:id", getNavbarById);
router.patch("/:NavbarId", updateNavbarTemplate);
router.delete("/:NavbarId", deleteNavbarTemplate);

module.exports = router;