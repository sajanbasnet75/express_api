const Joi = require("joi");
const validate = require("../utils/validate");

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().required(),
});

const signInValidator = async (req, res, next) => {
  try {
    await validate(req.body, schema);
    return next();
  } catch (err) {
    res.status(400).json({
      error: err.toString(),
    });
  }
};

module.exports = {
  signInValidator,
};
