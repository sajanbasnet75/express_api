const bookshelf = require("../db/db");
const TABLE_NAME = "users";

const User = bookshelf.model("User", {
  tableName: TABLE_NAME,
});

module.exports = User;
