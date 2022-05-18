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
      {
        _id: "2",
        title: "Second post",
        content: "This is the second post!",
        imageUrl: "images/city.jpeg",
        creator: {
          name: "Rimla",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: "Post created successfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
