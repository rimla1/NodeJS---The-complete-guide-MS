const express = require("express");
const { check, body /* checkSchema */ } = require("express-validator/check");

// const loginSchema = require("../validations/loginValidation");
const authController = require("../controllers/auth");
const User = require("../models/user");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email address."),
    body(
      "password",
      "Please enter a password with only number and text and at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  /* checkSchema(loginSchema), */ authController.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom(async (value, { req }) => {
        // if (value === "forbiddenuser@gmail.com") {
        //   throw new Error("This email address is forbidden");
        // }
        // return true;
        const userDoc = await User.findOne({ email: value });
        if (userDoc) {
          return Promise.reject(
            "Email already exists, please pick a different one."
          );
        }
      }),
    body(
      "password",
      "Please enter a password with only number and text and at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
