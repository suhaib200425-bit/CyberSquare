const Menu = require("../../models/Menu");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");
const createMenu = async (req, res) => {
  try {
    const { title, slug, page } = req.body;

    if (!title || !slug || !page) return res.status(400).json({ success: false, message: "All field is required" });

    const activetemplate = await WEB.findOne({ admin: req.user.id })
    if (!activetemplate) {
      return res.status(404).json({
        success: false,
        message: "No active template found",
      });
    }

    const existPageTitle = await Menu.findOne({
      theme: activetemplate.theme,
      auther: activetemplate.admin,
      title
    });

    if (existPageTitle) return res.status(400).json({ success: false, message: "Menu Title already used" });
    const existPageSlug = await Menu.findOne({
      auther: activetemplate.admin,
      theme: activetemplate.theme,
      slug
    });
    if (existPageSlug) return res.status(400).json({ success: false, message: "Menu Router already used" });


    const menu = await Menu.create({
      title,
      slug,
      page: page || null,
      auther: activetemplate.admin,
      theme: activetemplate.theme,
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