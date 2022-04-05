exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //   req.isLoggedIn = true; // request is dead after sending a response
  //   res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly"); // Using cookie
  req.session.isLoggedIn = true;
  res.redirect("/");
};
