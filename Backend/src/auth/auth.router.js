const router = require('express').Router();
const {postLogin} = require('./auth.services');
const {postRecoveryToken} = require('./auth.services');

router.post('/login', postLogin)
router.post('/recovery-password', postRecoveryToken)

module.exports = router