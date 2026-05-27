

const express =require("express") ;
const createTemplate = require("../controllers/Template/createTemplate");
const getTemplates = require("../controllers/Template/getTemplates");
const createPage = require("../controllers/Page/createPage");
const getPages = require("../controllers/Page/getPages");
const updatePage = require("../controllers/Page/updatePage");
const getPage = require("../controllers/Page/getPage");
const deletePage = require("../controllers/Page/deletePage");
const BuildingPages = require("../controllers/Page/BuildingPages");
const getPageBySlug = require("../controllers/Page/getPageBySlug");
const authMiddleware = require("../middleware/jwt");


const router = express.Router();

router.post("/",authMiddleware, createPage);
router.get("/",authMiddleware,getPages)
router.get("/builder",BuildingPages)
router.get("/:PageId",getPage)
router.get("/slug/:slug",getPageBySlug)
router.get("/title/:PageTitle",getPage)
router.patch("/:PageId",authMiddleware,updatePage)
router.delete("/:PageId",deletePage)
// router.get("/", (req, res) => {
//   res.send("PAGE API is running 🚀");
// });

module.exports= router;