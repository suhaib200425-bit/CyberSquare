
const jwt = require("jsonwebtoken");

const AuthVerify = (token) => {
  if (!token) {
    return {
      success: false,
      status: 401,
      message: "Token not found"
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN || "your_secret_key");

    return {
      success: true,
      status: 200,
      data: decoded
    };

  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return {
        success: false,
        status: 401,
        message: "Token expired"
      };
    }

    if (err.name === "JsonWebTokenError") {
      return {
        success: false,
        status: 401,
        message: "Invalid token"
      };
    }

    return {
      success: false,
      status: 500,
      message: "Token verification failed"
    };
  }
};

module.exports = AuthVerify;


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  const result = AuthVerify(token);

  if (!result.success) {
    return res.status(result.status).json({ valid:result.valid,message: result.message });
  }

  req.user = result.data;
  next();
};

module.exports = authMiddleware;