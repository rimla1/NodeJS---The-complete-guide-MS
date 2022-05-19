const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "This is the first post!",
        imageUrl: "images/city.jpeg",
        creator: {
          name: "Almir",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  try {
    const post = new Post({
      title: title,
      imageUrl: "images/city.jpeg",
      content: content,
      creator: {
        name: "Rimla",
      },
    });
    await post.save();
    console.log(post),
      res.status(201).json({
        message: "Post created successfully",
        post: post,
      });
  } catch (err) {
    console.log(err);
  }
};
