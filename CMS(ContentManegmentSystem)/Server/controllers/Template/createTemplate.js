const Template =require("../../models/Template.js");

 const createTemplate = async (req, res) => {
  try {
    const { name, template, values } = req.body;

    // basic validation
    if (!name || !template || !values) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTemplate = new Template({
      name,
      template,
      values
    });

    const savedTemplate = await newTemplate.save();

    res.status(201).json({
      message: "Template created successfully",
      data: savedTemplate
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      error:error.message
    });
  }
};

module.exports = createTemplate