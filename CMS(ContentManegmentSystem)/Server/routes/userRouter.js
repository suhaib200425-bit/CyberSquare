

const express =require("express") ;
const createTemplate = require("../controllers/Template/createTemplate");
const getTemplates = require("../controllers/Template/getTemplates");
const { SentOtp, verifyOtp } = require("../controllers/User/otpSent");
const { loginUser } = require("../controllers/User/LoginUser");
const { checkLoged } = require("../controllers/User/checkLoged");
const authMiddleware = require("../middleware/jwt");
const userRegister = require("../controllers/User/userRegister");
const userLogin = require("../controllers/User/userLogin");
const getAllUsers = require("../controllers/User/getAllUsers");
const { getUserById } = require("../controllers/User/getUserById");
const updateUser = require("../controllers/User/updateUser");


const router = express.Router();

router.post("/sent-otp", SentOtp);
router.post("/otp-verify", verifyOtp);
router.post("/register", userRegister);
router.post("/login", userLogin);
// router.post("/",loginUser)
router.get("/",authMiddleware,checkLoged)
router.get("/all",getAllUsers)
router.get("/get/id/:UserId",getUserById)
router.patch("/update/:UserId",updateUser)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;