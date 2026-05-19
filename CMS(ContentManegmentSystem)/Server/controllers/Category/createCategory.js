const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");

const createCategory = async (req, res) => {
  try {
    const { title, slug, parent, description } = req.body;

    // 🔍 Required check
    if (!title || !slug) {
      return res.status(400).json({ message: "Title and slug are required" });
    }

    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });
    const existCategoryTitle = await Category.findOne({
      theme: template._id,
      title
    });

    if (existCategoryTitle) return res.status(400).json({ success: false, message: "Category Title already used" });
    const existCategorySlug = await Category.findOne({
      theme: template._id,
      slug
    });
    if (existCategorySlug) return res.status(400).json({ success: false, message: "Category Router already used" });

    // 🔁 Duplicate check (optional but better)
    

    // 🆕 Create category
    const newCategory = new Category({
      title,
      slug,
      parent: parent || null,
      description,
      theme:template._id
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