const expect = require("chai").expect;

const authMiddleware = require("../middleware/is-auth");

describe("Auth middleware", () => {
  it("should throw an error if no autorization header is present", () => {
    const req = {
      get: (headerName) => {
        return null;
      },
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      "Not authenticated."
    );
  });

  it("should throw an error if no autorization header is only one string", () => {
    const req = {
      get: (headerName) => {
        return "xzy";
      },
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should throw an error if the token cannot be verified", () => {
    const req = {
      get: (headerName) => {
        return "Bearer xzy";
      },
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should yield a userId after decoding the token", () => {
    const req = {
      get: (headerName) => {
        return "Bearer gghhgfgfhgffufyfv";
      },
    };
    authMiddleware(req, {}, () => {});
    expect(req).to.have.property("userId");
  });
});
