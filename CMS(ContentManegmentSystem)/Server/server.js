const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/DB");
const { dashboard } = require("./controllers/dashboard");
const authMiddleware = require("./middleware/jwt");
const path = require("path");
const WEB = require("./models/WEB");
const Page = require("./models/Page");
const Menu = require("./models/Menu");


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
    "http://localhost:5175",
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

app.get("/api/dashboard", authMiddleware, dashboard)

//end points
app.use("/api/template", require('./routes/templateRoutes'));
app.use("/api/page", require('./routes/pageRoutes'));
app.use("/api/category", require('./routes/categoryRoutes'));
app.use("/api/post", require('./routes/postRouter'));
app.use("/api/menu", require('./routes/menuRoutes'));
app.use("/api/user", require('./routes/userRouter'));
app.use("/api/react/template", require('./routes/reactTemplateRoutes'));
app.use("/api/navbar/template", require('./routes/navbarTemplateRoutes'));
app.use("/api/footer/template", require('./routes/footerTemplateRoutes'));
app.use("/api/theme/template", require('./routes/themeTemplateRoutes'));
app.use("/api/auth/template", require('./routes/authRouters'));
app.use("/api/visit", require('./routes/visitRouter'));
app.use("/api/web", require('./routes/webRouters'));
app.use("/api/section", require('./routes/pageCategoryRoutes'));

app.get("/api/quick/change", async (req, res) => {
  try {
    const web = await WEB.findOne({ website: "cyber" })
    const pages = await Page.find({ theme: web.theme, auther: web.admin });
    const menus = await Menu.find({ theme: web.theme, auther: web.admin }).populate("page", "title");

    // Pages
    for (const item of pages) {
      const existPage = await Page.findOne({
        title: item.title,
        auther: null,
        theme: web.theme
      });
      const data = item.toObject();

      delete data._id;
      delete data.__v;
      delete data.createdAt;
      delete data.updatedAt;

      if (!existPage) {
        await Page.create({
          ...data,
          auther: null,
        });
      } else {
        await Page.findByIdAndUpdate(
          existPage._id, {
          sections: data.sections
        }, {
          new: true,          // updated document return cheyyum
          runValidators: true
        }
        );
      }


    }

    // Menus
    for (const item of menus) {

      const existMenu = await Menu.findOne({
        title: item.title,
        auther: null,
        theme: web.theme
      });
      console.log("existMenu");
      console.log(existMenu);

      const data = item.toObject();

      delete data._id;
      delete data.__v;
      delete data.createdAt;
      delete data.updatedAt;
        const menupage = await Page.findOne({ title: item.page?.title, auther: null })

      if (!existMenu) {
        await Menu.create({
          ...data,
          auther: null,
          page: menupage._id
        });

      } else {
        await Menu.findByIdAndUpdate(
          existMenu._id, {
          page: menupage._id

        }, {
          new: true,          // updated document return cheyyum
          runValidators: true
        }
        );
      }
    }

    res.status(201).json({
      success: true,
      message: "Complted"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
      error
    });
  }
});

app.get("/api/them/to/theme", async (req, res) => {
  try {
    const web = await WEB.findOne({ website: "kite" })
    const pages = await Page.find({ theme: web.theme, auther: web.admin });
    const menus = await Menu.find({ theme: web.theme, auther: web.admin }).populate("page", "title");
    const THEMEID = "6a3254233e3240409aa264a5"
    // Pages
    for (const item of pages) {
      const existPage = await Page.findOne({
        title: item.title,
        auther: null,
        theme: web.theme
      });
      const data = item.toObject();

      delete data._id;
      delete data.__v;
      delete data.createdAt;
      delete data.updatedAt;

      if (!existPage) {
        await Page.create({
          ...data,
          auther: null,
          theme: THEMEID
        });
      } else {
        await Page.findByIdAndUpdate(
          existPage._id, {
          sections: data.sections,
          auther: null,
          theme: THEMEID
        }, {
          new: true,          // updated document return cheyyum
          runValidators: true
        }
        );
      }


    }

    // Menus
    for (const item of menus) {

      const existMenu = await Menu.findOne({
        title: item.title,
        auther: null,
        theme: web.theme
      });
      console.log("existMenu");
      console.log(existMenu);

      const data = item.toObject();

      delete data._id;
      delete data.__v;
      delete data.createdAt;
      delete data.updatedAt;

      if (!existMenu) {
        const menupage = await Page.findOne({ title: item.page?.title, auther: null, theme: THEMEID })
        await Menu.create({
          ...data,
          auther: null,
          theme: THEMEID,
          page: menupage._id
        });
      }
    }

    res.status(201).json({
      success: true,
      message: "Complted"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
      error
    });
  }
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Default route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use((req, res) => {

  res.status(404).json({
    success: false,
    error: true,
    message: "Route not found"
  });

});



const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
