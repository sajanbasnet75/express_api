const Joi = require("joi");

const { userService } = require("../services");

const validate = require("../utils/validate");

const schema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),

  last_name: Joi.string().min(3).max(50).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().min(5).required(),
});

const userCreateValidator = async (req, res, next) => {
  try {
    await validate(req.body, schema);
    return next();
  } catch (err) {
    res.status(400).json({
      error: err.toString(),
    });
  }
};

const checkExistingUser = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (user) {
      res.status(400).json({ error: "Email already taken" });
    } else {
      return next();
    }
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
};

module.exports = {
  userCreateValidator,
  checkExistingUser,
};
