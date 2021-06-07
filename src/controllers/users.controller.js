const getAllUsers = async (req, res, next) => {
  res.json("all users");
};

const getUserById = async (req, res, next) => {
  res.json("user by id");
};

module.exports = {
  getAllUsers,
  getUserById,
};
