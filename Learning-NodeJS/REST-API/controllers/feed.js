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
