

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
const getMainPageAndOtherPages = require("../controllers/Page/getmainPage");
const getPageById = require("../controllers/Page/getPageById");
const getAllPageTitles = require("../controllers/Page/new/getAllPageTitles");


const router = express.Router();

router.post("/",authMiddleware, createPage);
router.get("/",authMiddleware,getPages)
router.get("/builder",BuildingPages)
router.get('/get/mainpage',authMiddleware,getMainPageAndOtherPages)
router.get("/:PageId",authMiddleware,getPage)
router.get("/slug/:slug",getPageBySlug)
router.get("/title/:PageTitle",getPage)
router.patch("/:PageId",authMiddleware,updatePage)
router.delete("/:PageId",deletePage)
// router.get("/", (req, res) => {
//   res.send("PAGE API is running 🚀");
// });
router.get("/getbyid/:PageId",getPageById)
router.get("/get/allpages",authMiddleware,getAllPageTitles)

module.exports= router;