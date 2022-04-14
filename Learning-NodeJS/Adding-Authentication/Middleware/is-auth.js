module.exports = (req, res, next) => {
  const isUserLoggedIn = req.session.isLoggedIn;
  if (!isUserLoggedIn) {
    return res.redirect("/login");
  }
  next();
};
