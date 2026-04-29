

const express =require("express") ;
const createCategory = require("../controllers/Category/createCategory");
const deleteCategory = require("../controllers/Category/deleteCategory");
const updateCategory = require("../controllers/Category/updateCategory");
const getCategories = require("../controllers/Category/getCategories");
const getCategoriesAndId = require("../controllers/Category/getCategoriesAndId");
const getCategory = require("../controllers/Category/getCategory");


const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.delete("/:CategoryId",deleteCategory)
router.patch("/:CategoryId",updateCategory)
router.get("/:CategoryId", getCategory);
router.get("/all/categoryname", getCategoriesAndId);
// router.get("/", getTemplates);
// router.get("/", (req, res) => {
//   res.send("Category API is running 🚀");
// });

module.exports= router;