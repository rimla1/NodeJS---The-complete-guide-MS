const dotEnv = require("dotenv");
dotEnv.config();
const expect = require("chai").expect;
const sinon = require("sinon");
const mongoose = require("mongoose");

const User = require("../models/user");
const Post = require("../models/post");
const FeedController = require("../controllers/feed");

describe("Feed Controller", () => {
  before((done) => {
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
          _id: "5c0f66b979af55031b34728a",
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  it("should add a created post to the posts of the creator", (done) => {
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

  after((done) => {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
