const express = require('express');

const router = express.Router();

const ControllerExpense = require('../controllers/ControllerExpense');

router.post('/', ControllerExpense.create);

module.exports = router;
