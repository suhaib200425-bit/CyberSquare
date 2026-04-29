

const express =require("express") ;
const createPost = require("../controllers/Post/createPost");
const getPosts = require("../controllers/Post/getPosts");
const getPostBySlug = require("../controllers/Post/getpostBySlug");
const deletePost = require("../controllers/Post/deletePost");
const getPostById = require("../controllers/Post/getPostById");
const updatePost = require("../controllers/Post/updatePost");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:slug", getPostBySlug);
router.get("/postid/:PostId", getPostById);
router.delete("/:PostId", deletePost);
router.patch("/:PostId", updatePost);
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;