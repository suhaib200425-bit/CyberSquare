

const express =require("express") ;
const createCategory = require("../controllers/Category/createCategory");
const deleteCategory = require("../controllers/Category/deleteCategory");
const updateCategory = require("../controllers/Category/updateCategory");
const getCategories = require("../controllers/Category/getCategories");
const getCategoriesAndId = require("../controllers/Category/getCategoriesAndId");
const getCategory = require("../controllers/Category/getCategory");
const authMiddleware = require("../middleware/jwt");
const getCategoryByWebsite = require("../controllers/Category/getCategoryByWebsite");
const topPostCategories = require("../controllers/Category/Newone/topPostCategories");
const getCategoryByAuther = require("../controllers/Category/AdminControllers/getCategoryByAuther");
const getAllCategoriesByAuther = require("../controllers/Category/AdminControllers/getAllCategoriesByAuther");


const router = express.Router();

router.post("/",authMiddleware ,createCategory);
router.get("/", authMiddleware,getCategories);
router.delete("/:CategoryId",deleteCategory)
router.patch("/:CategoryId",authMiddleware,updateCategory)
// router.get("/:CategoryId", getCategory);
router.get("/all/categoryname", getCategoriesAndId);
router.get("/get/published", getCategoryByWebsite);
router.get("/get/published", getCategoryByWebsite);
// router.get("/", getTemplates);
// router.get("/", (req, res) => {
//   res.send("Category API is running 🚀");
// });
router.get("/:website/top-post-categories", topPostCategories);

//ADMIN ROUTES
router.get("/category-by-auther",authMiddleware,getCategoryByAuther)
router.get("/all-categories-by-auther",authMiddleware,getAllCategoriesByAuther)



module.exports= router;