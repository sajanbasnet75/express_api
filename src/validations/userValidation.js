const Joi = require("joi");

const schema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),

  last_name: Joi.string().min(3).max(50).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().min(5).required(),
});

const userCreateValidator = (data) => {
  return schema.validate(data);
};

module.exports = {
  userCreateValidator,
};
