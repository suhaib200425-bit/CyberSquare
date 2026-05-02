

const express =require("express") ;
const createReactTemplate = require("../controllers/ReactTemplate/createReactTemplate");
const getAllReactTemplate = require("../controllers/ReactTemplate/getAllReactTemplate");
const deleteReactTemplate = require("../controllers/ReactTemplate/deleteReactTemplate");
const updateReactTemplate = require("../controllers/ReactTemplate/updateReactTemplate")


const router = express.Router();

router.post("/", createReactTemplate);
router.get("/",getAllReactTemplate)
router.patch("/:ReactTemplateId",updateReactTemplate)
router.delete("/:ReactTemplateId",deleteReactTemplate)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;
