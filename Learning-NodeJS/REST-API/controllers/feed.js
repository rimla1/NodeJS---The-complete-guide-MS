const { validationResult } = require("express-validator");
const post = require("../models/post");
const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    // if (!posts) {
    //   res.status(200).json({ message: "No posts found!" });
    // }
    res
      .status(200)
      .json({ message: "Posts fetched successfully!", posts: posts });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.createPost = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const error = new Error("Validation failed, entered data is incorrect");
//     error.statusCode = 422;
//     next(error);
//   }
//   const title = req.body.title;
//   const content = req.body.content;
//   try {
//     const post = new Post({
//       title: title,
//       imageUrl: "images/city.jpeg",
//       content: content,
//       creator: {
//         name: "Rimla",
//       },
//     });
//     await post.save();
//     console.log(post),
//       res.status(201).json({
//         message: "Post created successfully",
//         post: post,
//       });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  const title = req.body.title;
  const content = req.body.content;
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect");
    error.statusCode = 422;
    throw error;
  }

  const post = new Post({
    title: title,
    imageUrl: "images/city.jpeg",
    content: content,
    creator: {
      name: "Rimla",
    },
  });

  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully!",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = async (req, res, mext) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      const error = new Error("Could not find post.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Post fetched.", post: post });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
