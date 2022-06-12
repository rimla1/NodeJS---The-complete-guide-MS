const dotEnv = require("dotenv");
dotEnv.config();
const expect = require("chai").expect;
const sinon = require("sinon");
const mongoose = require("mongoose");

const User = require("../models/user");
const AuthController = require("../controllers/auth");

describe("Auth Controller - Login", () => {
  it("should throw an error with code 500 if there is no accessing to the db", (done) => {
    sinon.stub(User, "findOne");
    User.findOne.throws();

    const req = {
      body: {
        email: "userThatDoesNotExist@gmail.com",
        password: "userThatDoesNotExist",
      },
    };
    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an("error");
      expect(result).to.have.property("statusCode", 500);
      done();
    });

    User.findOne.restore();
  });

  it("should send a response with a valid user status for an existing user", (done) => {
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/${process.env.MONGODB_DB_NAME_TEST}?retryWrites=true&w=majority`
      )
      .then((result) => {
        const user = new User({
          email: "test10@test.com",
          password: "tester",
          name: "Test",
          posts: [],
        });
        return user.save();
      })
      .then(() => {})
      .catch((err) => console.log(err));
  });
});
