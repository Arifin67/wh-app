const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
const signToken = (payload) => {
  return jwt.sign(payload, secret);
};

const verivyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { signToken, verivyToken };
