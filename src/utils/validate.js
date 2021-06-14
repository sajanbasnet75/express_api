const validate = async (data, schema) => {
  const { error, value } = await schema.validate(data);

  if (error) {
    throw new Error(error);
  }
  return value;
};

module.exports = validate;
