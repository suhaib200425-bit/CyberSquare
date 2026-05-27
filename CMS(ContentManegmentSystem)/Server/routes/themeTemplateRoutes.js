

const express =require("express") ;
const getTemeTemplate = require("../controllers/TemeTemplate/getTemeTemplate");
const updateThemeTemplate = require("../controllers/TemeTemplate/updateThemeTemplate");
const { CreateThemTemplate, CreateThemeTemplatePage, CreateThemeTemplateCategory, CreateThemeTemplatePost, CreateThemeTemplateMenu } = require("../controllers/TemeTemplate/createTemTemplate");
const deleteTemplate = require("../controllers/Template/deleteTemplate");
const deleteThemeTemplate = require("../controllers/TemeTemplate/deleteTemeTemplate");
const toggelFooterTemplate = require("../controllers/FooterTemplate/toggelFooterTemplate");
const toggelThemeTemplate = require("../controllers/TemeTemplate/toggelThemeTemplate");
const authMiddleware = require("../middleware/jwt");

const router = express.Router();

router.post("/", CreateThemTemplate);
router.post("/page", CreateThemeTemplatePage);
router.post("/menu", CreateThemeTemplateMenu);
router.post("/category", CreateThemeTemplateCategory);
router.post("/post", CreateThemeTemplatePost);
router.get("/",authMiddleware,getTemeTemplate);
router.patch("/:TemeTemplateId",authMiddleware, updateThemeTemplate);
router.delete("/:TemeTemplateId", deleteThemeTemplate);
router.patch("/checked/:TemeTemplateId",authMiddleware,toggelThemeTemplate)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;