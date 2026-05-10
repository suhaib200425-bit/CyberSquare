const User = require("../../models/User");

const updateUser = async (req, res) => {
    try {
        const { UserId } = req.params;
 delete req.body.password;
        const updatedUser = await User.findByIdAndUpdate(
            UserId,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "user updated successfully",
            data: updatedUser,
        });
    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server error",
            error:error.message
        });
    }
};

module.exports = updateUser