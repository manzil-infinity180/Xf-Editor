const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");

router.post('/register',registerController.createUser);
router.get('/',registerController.getAllUser);


module.exports = router;
