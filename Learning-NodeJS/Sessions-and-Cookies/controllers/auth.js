exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  console.log(isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //   req.isLoggedIn = true; // request is dead after sending a response
  res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");
  res.redirect("/");
};
