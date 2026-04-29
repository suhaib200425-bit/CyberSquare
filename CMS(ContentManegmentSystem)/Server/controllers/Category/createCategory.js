const Category = require("../../models/Category");

const createCategory = async (req, res) => {
  try {
    const { title, slug, parent,description } = req.body;

    // 🔍 Required check
    if (!title || !slug) {
      return res.status(400).json({ message: "Title and slug are required" });
    }

    // 🔁 Duplicate check (optional but better)
    const existing = await Category.findOne({
      $or: [{ title }, { slug }]
    });

    if (existing) {
      return res.status(400).json({ success:false,message: "Category already exists" });
    }

    // 🆕 Create category
    const newCategory = new Category({
      title,
      slug,
      parent: parent || null,
      description,
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