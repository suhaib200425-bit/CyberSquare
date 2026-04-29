

const express =require("express") ;
const createTemplate = require("../controllers/Template/createTemplate");
const getTemplates = require("../controllers/Template/getTemplates");
const deleteTemplate = require("../controllers/Template/deleteTemplate");


const router = express.Router();

router.post("/", createTemplate);
router.get("/", getTemplates);
router.delete("/:templateId", deleteTemplate);
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;
