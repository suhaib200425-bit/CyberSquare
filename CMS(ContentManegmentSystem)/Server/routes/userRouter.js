

const express =require("express") ;
const createTemplate = require("../controllers/Template/createTemplate");
const getTemplates = require("../controllers/Template/getTemplates");
const { SentOtp, verifyOtp } = require("../controllers/User/otpSent");
const { loginUser } = require("../controllers/User/LoginUser");
const { checkLoged } = require("../controllers/User/checkLoged");
const authMiddleware = require("../middleware/jwt");


const router = express.Router();

router.post("/sent-otp", SentOtp);
router.post("/otp-verify", verifyOtp);
router.post("/",loginUser)
router.get("/",authMiddleware,checkLoged)
// router.get("/", (req, res) => {
//   res.send("TEMPLATE API is running 🚀");
// });

module.exports= router;