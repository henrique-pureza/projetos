const express = require("express");

const controller = require("./../controllers/controller");

const router = express.Router();

router.get("/", controller.teste);

router.get("/all", controller.getAllUsers);

router.get("/get", controller.getUser);

router.post("/create", controller.createUser);

router.put("/change", controller.changeUser);

router.delete("/delete", controller.deleteUser);

module.exports = router;