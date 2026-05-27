const Post = require("../../models/Post");
const slugify = require("slugify");

const createPost = async (req, res) => {
  try {
    const { title, category, content, excerpt, status, banner } = req.body;
    const user = req.user
    if (user.role != "admin") res.status(400).json({
      success: false,
      message: "Post Created at only admin"
    });
    // validation
    if (!title || !category || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, Category and Content are required"
      });
    }

    // generate slug
    const slug = slugify(title, { lower: true, strict: true });

    // create post
    const post = await Post.create({
      title,
      slug,
      banner,
      category,
      content,
      excerpt,
      status,
      auther:user.id
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post
    });

  } catch (error) {
    console.error(error);

    // handle duplicate slug error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Post with same slug already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

module.exports = createPost