const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/users-model.js");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 4);
    user.password = hash;

    const addedUser = await Users.add(user);

    res.status(201).json(addedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
