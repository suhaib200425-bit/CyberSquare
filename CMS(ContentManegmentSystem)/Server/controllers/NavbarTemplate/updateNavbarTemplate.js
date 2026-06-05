const NavbarTemplate = require("../../models/NavbarTemplate");
const WEB = require("../../models/WEB");

const updateNavbarTemplate = async (req, res) => {
  try {
    const admin = req.user;
const {NavbarId} = req.params
    const updatedweb = await WEB.findOneAndUpdate(
      { admin: admin.id },
      { navbarProps: req.body.props },
      { new: true, runValidators: true }
    );
     if (!updatedweb) {
      return res.status(404).json({
        success: false,
        message: "Website not found"
      });
    }
    
    const updateNavbar= await NavbarTemplate.findByIdAndUpdate(
      NavbarId,
      req.body,
      {new:true}
    )

   

    res.status(200).json({
      success: true,
      data: updateNavbar,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = updateNavbarTemplate;