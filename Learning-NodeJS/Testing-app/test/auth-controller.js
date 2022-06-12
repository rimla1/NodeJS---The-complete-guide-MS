const expect = require("chai").expect;
const sinon = require("sinon");

const User = require("../models/user");
const AuthController = require("../controllers/auth");

describe("Auth Controller - Login", () => {
  it("It should throw an error with code 500 if there is no accessing to the db", () => {
    sinon.stub(User, "findOne");
    User.findOne.throws();

    expect(AuthController.login);

    User.findOne.restore();
  });
});
