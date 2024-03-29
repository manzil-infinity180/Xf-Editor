const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");

router.post('/register',registerController.createUser);
router.post('/login',registerController.login);
router.get('/',registerController.getAllUser);
// router.get('/forgot-password',registerController.forgotPassword)
// only authenticated user can do this 
router.use(registerController.isAuthenticated);
router.get('/profile',registerController.myself);
router.patch('/update',registerController.updateMe);
router.post('/forgot-password',registerController.forgotPassword);
router.patch('/reset-password/:token',registerController.resetPassword);
module.exports = router;
