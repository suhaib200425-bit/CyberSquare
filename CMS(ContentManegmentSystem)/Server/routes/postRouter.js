

const express =require("express") ;
const createPost = require("../controllers/Post/createPost");
const getPosts = require("../controllers/Post/getPosts");
const getPostBySlug = require("../controllers/Post/getpostBySlug");
const deletePost = require("../controllers/Post/deletePost");
const getPostById = require("../controllers/Post/getPostById");
const updatePost = require("../controllers/Post/updatePost");
const getPostDefault = require("../controllers/Post/getPostDefault");
const relatedArticlesById = require("../controllers/Post/relatedArticlesById");
const relatedCategoryById = require("../controllers/Post/relatedCategoryById");
const authMiddleware = require("../middleware/jwt");
const getPostPublished = require("../controllers/Post/PublishedPost");
const getLatestPosts = require("../controllers/Post/newOnes/getLatestPosts");
const getSinglePopularPost = require("../controllers/Post/newOnes/getSignglePopularPost");
const getPopularPosts = require("../controllers/Post/newOnes/getPopularPosts");
const getPopularCategoryPostsAndHotPosts = require("../controllers/Post/newOnes/getPopularCategoryPostsAndHotPosts");
const getSingleCategoryPosts = require("../controllers/Post/newOnes/getSingleCategoryPosts");
const getSinglePost = require("../controllers/Post/newOnes/getSinglePost");
const getPostsByStatus = require("../controllers/Post/AdminControllers/getPostsByStatus");
const getSearchPostsByQuery = require("../controllers/Post/AdminControllers/getSearchPostsByQuery");

const router = express.Router();

router.post("/", authMiddleware,createPost);
router.get("/",authMiddleware, getPosts);
// router.get("/:slug", getPostBySlug);
router.get("/get/default", getPostDefault);
router.get("/get/published", getPostPublished);
router.get("/postid/:PostId", getPostById);
router.delete("/:PostId", deletePost);
router.patch("/:PostId", updatePost);
router.get("/category/:PostId",relatedArticlesById)
router.get("/get/by/category/:CategoryId",relatedCategoryById)
router.get("/get/by/category/",relatedCategoryById)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });
router.get("/:website/latest-posts",getLatestPosts );
router.get("/:website/popular-posts",getPopularPosts );
router.get("/:website/new-posts",getPopularPosts );
router.get("/:website/top-category-posts",getPopularPosts );
router.get("/:website/single-latest-post",getSinglePopularPost );
router.get("/:website/single-popular-post",getSinglePopularPost );
router.get("/:website/top-category-post",getSinglePopularPost );
router.get("/:website/popular-category-posts-and-hot-post",getPopularCategoryPostsAndHotPosts );
router.get("/:website/single-category-posts",getSingleCategoryPosts );
router.get("/:website/single-post/:PostId", getSinglePost );
//BACKEND
router.get("/posts-by-status",authMiddleware,getPostsByStatus );
router.get("/search-posts-by-query",authMiddleware,getSearchPostsByQuery );



module.exports= router;