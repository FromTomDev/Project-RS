const router = require('express').Router();
const authController = require('../Project-RS/controllers/auth.controller');

router.post("/register", authController.signUp);

module.exports = router;
