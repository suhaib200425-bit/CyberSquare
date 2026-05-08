const express = require("express");
const createAuthTemplate = require("../controllers/Auth/createAuthTemplate");
const getallAuthTemplate = require("../controllers/Auth/getallAuthTemplate");
const toggelAuthTemplate = require("../controllers/Auth/toggelAuthTemplate");
const getcheckedAuthTemplate = require("../controllers/Auth/getcheckedAuthTemplate");
const updateAuthTemplate = require("../controllers/Auth/updateAuthTemplate");
const deleteAuthTemplate = require("../controllers/Auth/deleteAuthTemplate");
const router = express.Router();


router.post("/", createAuthTemplate);
router.get("/", getallAuthTemplate);
router.patch("/checked/:AuthTemplateId",toggelAuthTemplate)
router.get("/checked",getcheckedAuthTemplate)
// router.get("/:id", getNavbarById);
router.patch("/:AuthTemplateId", updateAuthTemplate);
router.delete("/:AuthTemplateId", deleteAuthTemplate);

module.exports = router;