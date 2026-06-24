

const express =require("express") ;
const getTotalUsersPostsAndVisiters = require("../../controllers/OtherControllers/getTotalUserPostsAndVisters");


const router = express.Router();


//ADMIN ROUTES
router.get("/:website/total-users-posts-visiters",getTotalUsersPostsAndVisiters);

module.exports = router;

