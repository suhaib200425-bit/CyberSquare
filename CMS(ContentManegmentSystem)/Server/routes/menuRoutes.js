

const express =require("express") ;
const createMenu = require("../controllers/Menu/createMenu");
const getMenus = require("../controllers/Menu/getMenus");
const deleteMenu = require("../controllers/Menu/deleteMenu");
const updateMenu = require("../controllers/Menu/updateMenu");
const getMenuById = require("../controllers/Menu/getMenuById");
const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenus);
router.get("/:MenuId", getMenuById);
router.delete("/:MenuId", deleteMenu);
router.patch("/:MenuId", updateMenu);
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;