const User = require("../models/user");
const bcrypt = require("bcryptjs");

const signInUser = async (sessionParams) => {
  try {
    const user = await new User({ email: sessionParams.email }).fetch();
    const validPassword = await bcrypt.compare(
      sessionParams.password,
      user.toJSON().password
    );
    if (!validPassword) {
      throw new Error();
    }
    return true;
  } catch (err) {
    return "Invalid email or Password";
  }
};

module.exports = {
  signInUser,
};
