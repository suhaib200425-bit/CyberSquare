const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

const createCategory = async (req, res) => {
  try {
    const { title, slug, parent, description } = req.body;

    // 🔍 Required check
    if (!title || !slug) {
      return res.status(400).json({ message: "Title and Slug are required" });
    }

    const activetemplate = await WEB.findOne({ admin: req.user.id })
    if (!activetemplate) {
      return res.status(404).json({
        success: false,
        message: "No active template found",
      });
    }

    // 🔁 Duplicate check (optional but better)
    const existCategoryTitle = await Category.findOne({
      theme: activetemplate.theme,
      auther: activetemplate.admin,
      title
    });
    
    if (existCategoryTitle) return res.status(400).json({ success: false, message: "Category Title already used" });
    const existCategorySlug = await Category.findOne({
      theme: activetemplate.theme,
      auther: activetemplate.admin,
      slug
    });
    if (existCategorySlug) return res.status(400).json({ success: false, message: "Category Router already used" });


    // 🆕 Create category
    const newCategory = new Category({
      title,
      slug,
      parent: parent || null,
      description,
      theme: activetemplate.theme,
      auther: activetemplate.admin
    });

    const savedCategory = await newCategory.save();

    res.status(201).json({
      message: "Category created successfully",
      data: savedCategory
    });

  } catch (error) {
    console.error(error.response.data || error.message);

    // 🔥 Mongo duplicate error (fallback)
    // if (error.code === 11000) {
    //   return res.status(400).json({ message: "Duplicate title or slug" });
    // }

    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createCategory;