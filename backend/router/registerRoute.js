const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");

router.post('/register',registerController.createUser);
router.get('/login',registerController.login);
// router.get('/forgot-password',registerController.forgotPassword)
// only authenticated user can do this 
router.use(registerController.isAuthenticated);
router.get('/',registerController.getAllUser);
router.patch('/update',registerController.updateMe);

module.exports = router;
