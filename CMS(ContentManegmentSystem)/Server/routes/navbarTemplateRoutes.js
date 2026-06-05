const express = require("express");
const router = express.Router();

const createNavbarTemplate = require("../controllers/NavbarTemplate/createNavbarTemplate");
const getallNavbarTemplate = require("../controllers/NavbarTemplate/getallNavbarTemplate");
const updateNavbarTemplate = require("../controllers/NavbarTemplate/updateNavbarTemplate");
const deleteNavbarTemplate = require("../controllers/NavbarTemplate/deleteNavbarTemplate");
const toggelNavbarTemplate = require("../controllers/NavbarTemplate/toggelNavbarTemplate");
const getCheckedNavbarTemplate = require("../controllers/NavbarTemplate/getcheckedNavbarTemplate");
const authMiddleware = require("../middleware/jwt");

router.post("/",authMiddleware, createNavbarTemplate);
router.get("/", authMiddleware,getallNavbarTemplate);
router.patch("/checked/:NavbarId",authMiddleware,toggelNavbarTemplate)
router.get("/checked",authMiddleware,getCheckedNavbarTemplate)
// router.get("/:id", getNavbarById);
router.patch("/:NavbarId", authMiddleware,updateNavbarTemplate);
router.delete("/:NavbarId", deleteNavbarTemplate);

module.exports = router;