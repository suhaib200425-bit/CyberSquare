

const express =require("express") ;
const getAllSections = require("../controllers/PageCategories/getAllSections");


const router = express.Router();


//ADMIN ROUTES
router.get("/",getAllSections);

module.exports = router;
