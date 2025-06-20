const express = require('express');
const router = express.Router();
const { register, updateProfile, login } = require('../controllers/userController');

router.post('/register', register);
router.put('/update-profile', updateProfile);
router.post('/login',login);

module.exports = router;
