const Menu = require("../../models/Menu");
const ThemeTemplate = require("../../models/ThemeTemplate")
const createMenu = async (req, res) => {
  try {
    const { title, slug, page } = req.body;

    if (!title || !slug || !page) return res.status(400).json({ success: false, message: "All field is required" });

    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

    const existPageTitle = await Menu.findOne({
      theme: template._id,
      title
    });

    if (existPageTitle) return res.status(400).json({ success: false, message: "Menu Title already used" });
    const existPageSlug = await Menu.findOne({
      theme: template._id,
      slug
    });
    if (existPageSlug) return res.status(400).json({ success: false, message: "Menu Router already used" });


    const menu = await Menu.create({
      title,
      slug,
      page: page || null,
      theme:template._id
    });


    res.status(201).json({
      success: true,
      data: menu
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = createMenu;