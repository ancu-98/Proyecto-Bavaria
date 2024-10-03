const router = require('express').Router();
const postLogin = require('./auth.services');

router.post('/login', postLogin)
router.post('/recovery-password', authServices.postRecoveryToken)

module.exports = router