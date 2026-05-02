const ReactTemplate = require("../../models/ReactTemplate");

// CREATE TEMPLATE
const createReactTemplate = async (req, res) => {
    try {
        const { name, template,props } = req.body;

        // validation
        if (!name || !template || !props) {
            return res.status(400).json({
                success: false,
                message: "Name,Props and Template are required",
            });
        }

        // create
        const newTemplate = new ReactTemplate({
            name,
            template,
            props
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
            message: error.message,
        });
    }
};

module.exports = createReactTemplate;