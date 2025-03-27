const bcrypt = require("bcrypt");

// Hash Password Function
const hashPassword = async function (password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log(error);
    throw new Error("Error in hashing password");
  }
};

// Compare Password Function
const dcryptPassword = async function (password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.log(error);
    throw new Error("Error in comparing passwords");
  }
};

module.exports = { hashPassword, dcryptPassword };
