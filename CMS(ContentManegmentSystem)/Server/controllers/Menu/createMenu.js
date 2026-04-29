const Menu = require("../../models/Menu");

const createMenu = async (req, res) => {
  try {
    const { title, slug, page } = req.body;

    const menu = await Menu.create({
      title,
      slug,
      page: page || null
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