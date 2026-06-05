const PageCategory = require("../../models/PageCategory");
const ReactTemplate = require("../../models/ReactTemplate");

// CREATE TEMPLATE
const createReactTemplate = async (req, res) => {

  try {

    const { name, template, props, pageRef } = req.body;

    // if (!req.file) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "File required",
    //   });
    // }
    let existingRefPage = await PageCategory.findOne({ pageRef })
    if (!existingRefPage)
      existingRefPage = await PageCategory.create({ pageRef })

    if (!name || !template) {
      return res.status(400).json({
        success: false,
        message: "Name, Props and Template required",
      });
    }

    const fileUrl = `/uploads/${req.file.filename}`;

    const newTemplate =
      new ReactTemplate({

        name,

        template: template,

        props: props,

        banner: fileUrl,

        pageRef:existingRefPage._id

      });

    await newTemplate.save();

    res.status(201).json({
      success: true,
      message: "Template created successfully",
      data: newTemplate,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "server error",
      error: error.message,
    });

  }

};
module.exports = createReactTemplate;