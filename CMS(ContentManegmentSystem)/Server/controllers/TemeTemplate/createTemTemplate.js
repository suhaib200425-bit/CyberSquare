const Menu = require("../../models/Menu");
const Page = require("../../models/Page");
const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");
const Post = require("../../models/Post");

const slugify = require("slugify");

// CREATE USER
const CreateThemTemplate = async (req, res) => {

    try {

        const { name, checked, banner } = req.body;
        if (!name || !banner) {
            return res.status(500).json({
                success: false,
                message: "All Feild Is Required"
            });
        }

        await ThemeTemplate.updateMany({}, { checked: false });
        const newTheme = await ThemeTemplate.create({
            name,
            checked: true,
            banner,
        });

        res.status(201).json({
            success: true,
            message: "Theme created successfully",
            data: newTheme
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });

    }

};

const CreateThemeTemplatePage = async (req, res) => {
    try {

        const { title, slug, status, sections } = req.body["page"];
        console.log(title);
        console.log(slug);


        const  themeId  = req.body.id

        // Basic validation
        if (!title || !slug || !sections) {
            return res.status(400).json({ success: false, message: "all field is required" });
        }

        const newPage = new Page({
            title: title || "Default Page",
            slug,
            sections,
            status,
            theme: themeId
        });

        const savedPage = await newPage.save();

        res.status(201).json({
            success: true,
            message: "Page created successfully",
            data: savedPage,
            pageId: savedPage._id
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
}

const CreateThemeTemplateMenu = async (req, res) => {
    try {
        const { title, slug } = req.body["menu"];
        console.log(title);
        console.log(slug);

        const  themeId  = req.body.id
        const  page = req.body.pageId

const indexes = await Menu.collection.indexes();

   const titleIndex = indexes.find(
      (i) => i.name === "title_1"
   );
   const slugIndex = indexes.find(
      (i) => i.name === "slug_1"
   );

   if (titleIndex) {

      await Menu.collection.dropIndex("title_1");
      await Menu.collection.dropIndex("slug_1");

      console.log("Removed title_1 index");

   }

        const menu = await Menu.create({
            title,
            slug,
            page,
            theme: themeId

        });

        res.status(201).json({
            success: true,
            data: menu,
            menuId: menu._id
        });

        const data = req.body

        res.json(data)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
}

const CreateThemeTemplateCategory = async (req, res) => {
    try {

        const { title, slug, parent, description } = req.body["category"];

        const  themeId  = req.body.id

        // 🔍 Required check
        if (!title || !slug) {
            return res.status(400).json({ message: "Title and slug are required" });
        }

        // 🔁 Duplicate check (optional but better)
        // const existing = await Category.findOne({
        //     $or: [{ title }, { slug }]
        // });

        // if (existing) {
        //     return res.status(400).json({ success: false, message: "Category already exists" });
        // }

        // 🆕 Create category
        const newCategory = new Category({
            title,
            slug,
            parent: parent || null,
            description,
            theme: themeId
        });

        const savedCategory = await newCategory.save();

        res.status(201).json({
            message: "Category created successfully",
            data: savedCategory,
            categoryId: savedCategory._id
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
}

const CreateThemeTemplatePost = async (req, res) => {
    try {

        const  themeId  = req.body.id
        const { categoryId } = req.body
        const { title, content, excerpt, status, banner } = req.body["post"];
console.log(req.body);

        // validation
        if (!title || !content || !categoryId) {
            return res.status(400).json({
                success: false,
                message: "Title, Category and Content are required"
            });
        }

        // generate slug
        const slug = slugify(title, { lower: true, strict: true });


        const indexes = await Post.collection.indexes();

   const titleIndex = indexes.find(
      (i) => i.name === "slug_1"
   );

   if (titleIndex) {

      await Post.collection.dropIndex("slug_1");

      console.log("Removed slug_1 index");

   }
        // create post
        const post = await Post.create({
            title,
            slug,
            banner,
            category:categoryId,
            content,
            excerpt,
            status
        });

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: post
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
}

// GET SINGLE USER
const GetSingleUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};





module.exports = {
    CreateThemTemplate,
    CreateThemeTemplatePage,
    CreateThemeTemplateMenu,
    CreateThemeTemplateCategory,
    CreateThemeTemplatePost,
    GetSingleUser
};