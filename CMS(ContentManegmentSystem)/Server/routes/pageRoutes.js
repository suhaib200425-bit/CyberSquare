

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


const router = express.Router();

router.post("/", createPage);
router.get("/",getPages)
router.get("/builder",BuildingPages)
router.get("/:PageId",getPage)
router.get("/title/:title",getPageBySlug)
router.get("/title/:PageTitle",getPage)
router.patch("/:PageId",updatePage)
router.delete("/:PageId",deletePage)
// router.get("/", (req, res) => {
//   res.send("PAGE API is running 🚀");
// });

module.exports= router;