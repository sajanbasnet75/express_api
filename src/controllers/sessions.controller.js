const { sessionService } = require("../services");

const signInUser = async (req, res, next) => {
  try {
    const validUser = await sessionService.signInUser(req.body);
    res.json(validUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signInUser,
};
