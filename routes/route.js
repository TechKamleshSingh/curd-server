const express = require("express");
const addUser = require("../controller/user-controller").addUser;
const getUsers = require("../controller/user-controller").getUsers;
const getUser = require("../controller/user-controller").getUser;
const editUser = require("../controller/user-controller").editUser;
const deleteUser = require("../controller/user-controller").deleteUser;

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
