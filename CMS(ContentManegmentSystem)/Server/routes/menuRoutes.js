

const express =require("express") ;
const createMenu = require("../controllers/Menu/createMenu");
const getMenus = require("../controllers/Menu/getMenus");
const deleteMenu = require("../controllers/Menu/deleteMenu");
const updateMenu = require("../controllers/Menu/updateMenu");
const getMenuById = require("../controllers/Menu/getMenuById");
const authMiddleware = require("../middleware/jwt");
const router = express.Router();

router.post("/",authMiddleware, createMenu);
router.get("/", authMiddleware ,getMenus);
router.get("/:MenuId", getMenuById);
router.delete("/:MenuId", deleteMenu);
router.patch("/:MenuId",authMiddleware, updateMenu);
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;