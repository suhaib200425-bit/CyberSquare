

const express =require("express") ;
const createReactTemplate = require("../controllers/ReactTemplate/createReactTemplate");
const getAllReactTemplate = require("../controllers/ReactTemplate/getAllReactTemplate");
const deleteReactTemplate = require("../controllers/ReactTemplate/deleteReactTemplate");
const updateReactTemplate = require("../controllers/ReactTemplate/updateReactTemplate");
const upload = require("../middleware/multer");
const { getSingleTemplate } = require("../controllers/ReactTemplate/GetSignleReactTemplate");


const router = express.Router();

router.post("/", upload.single("banner"),createReactTemplate);
router.get("/",getAllReactTemplate)
router.get("/:ReactTemplateId",getSingleTemplate)
router.patch("/:ReactTemplateId",updateReactTemplate)
router.delete("/:ReactTemplateId",deleteReactTemplate)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;
