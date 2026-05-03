const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/DB");

// Routes import
// const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware
// app.use(cors({
//   origin:"*",
//   methods: ["GET","POST","PUT","PATCH","DELETE"],
//   allowedHeaders: ["Content-Type","Authorization"]
// }));

const corsOptions = {
  origin: [
    "http://localhost:5174",
    "http://localhost:5173",
    "https://cyber-square-3f3k.vercel.app",
    "https://thee-slightly-dowry.ngrok-free.dev"
  ],
  credentials: true
};

// app.use(cors({
//   origin: "http://localhost:5174",
//   credentials: true
// }));

app.use(cors(corsOptions));

app.use(express.json());

//DB CONNECTION 
connectDB()

//end points
app.use("/api/template", require('./routes/templateRoutes'));
app.use("/api/page", require('./routes/pageRoutes'));
app.use("/api/category", require('./routes/categoryRoutes'));
app.use("/api/post", require('./routes/postRouter'));
app.use("/api/menu", require('./routes/menuRoutes'));
app.use("/api/user", require('./routes/userRouter'));
app.use("/api/react/template", require('./routes/reactTemplateRoutes'));
app.use("/api/navbar/template", require('./routes/navbarTemplateRoutes'));
// Default route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server running on port ${PORT}`);
});
