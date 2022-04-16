const crypto = require("crypto");
const dotEnv = require("dotenv");
dotEnv.config();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const User = require("../models/user");

const transporter = nodemailer.createTransport({
  host: "smtp.mandrillapp.com",
  port: 587,
  secure: false,
  auth: {
    user: "Student",
    pass: "lJ75YFatFAPpP7CPdC3bZQ",
  },
});

exports.getLogin = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    errorMessage: message,
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    errorMessage: message,
  });
};

// exports.postLogin = (req, res, next) => {
//   User.findById("5bab316ce0a7c75f783cb8a8")
//     .then((user) => {
//       req.session.isLoggedIn = true;
//       req.session.user = user;
//       req.session.save((err) => {
//         console.log(err);
//         res.redirect("/");
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      req.flash("error", "Invalid email");
      return res.redirect("/login");
    }
    const doesPasswordsMatch = await bcrypt.compare(password, user.password);
    if (doesPasswordsMatch) {
      req.session.isLoggedIn = true;
      req.session.user = user;
      return req.session.save((err) => {
        res.redirect("/");
      });
    }
    req.flash("error", "Invalid Passowrd");
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

// exports.postSignup = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const confirmPassword = req.body.confirmPassword;
//   User.findOne({ email: email })
//     .then((userDoc) => {
//       console.log(userDoc);
//       if (userDoc) {
//         return res.redirect("/signup");
//       }
//       const user = new User({
//         email: email,
//         password: password,
//         cart: { items: [] },
//       });
//       return user.save();
//     })
//     .then((result) => res.redirect("/login"))
//     .catch((err) => console.log(err));
// };

exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  try {
    const userDoc = await User.findOne({ email: email });
    if (userDoc) {
      req.flash("error", "User already exist");
      return res.redirect("/signup");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email: email,
      password: hashedPassword,
      cart: { items: [] },
    });
    await user.save();
    const rsp = await transporter.sendMail({
      to: "amcenp@gmail.com",
      from: "shop@node-complete.com",
      subject: "Signup succeeded!",
      html: "<h1>You successfully signed up!</h1>",
    });
    console.log(rsp);
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset Password",
    errorMessage: message,
  });
};

exports.postReset = async (req, res, next) => {
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect("/reset");
    }
    const token = buffer.toString("hex");
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      req.flash("error", "No account has been found");
      return res.redirect("/reset");
    }
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();
    const ResponseInConsole = await transporter.sendMail({
      to: req.body.email,
      from: "shop@node-complete.com",
      subject: "Password reset",
      html: `
      <h1>Reset your password</h1>
      <p>Click this <a href="http://localhost:3535/reset/${token}">link</a> to reset a password</p>
      `,
    });
    console.log(ResponseInConsole);
    res.redirect("/");
  });
};
