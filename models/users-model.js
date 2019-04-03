const db = require("../config/knexConfig.js");

module.exports = {
  add,
  find,
  findById
};

function find() {
  return db("users").select("id", "username", "password", "department");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}
