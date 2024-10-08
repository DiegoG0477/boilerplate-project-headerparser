const express = require('express');
const router = express.Router();
const headerController = require('../controllers/header.controller');

router.get('/api/whoami', headerController);

module.exports = router;