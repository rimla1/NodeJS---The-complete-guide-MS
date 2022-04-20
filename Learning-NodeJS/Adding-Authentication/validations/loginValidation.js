const loginSchema = {
  email: {
    normalizeEmail: true,
  },
  password: {
    isLength: {
      errorMessage: "Password should be at least 5 characters long",
      options: { min: 5 },
    },
  },
};

module.exports = loginSchema;
