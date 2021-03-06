const express = require('express');

const router = express.Router();

const ControllerExpense = require('../controllers/ControllerExpense');
const Middlewares = require('../middlewares');

router.post('/', Middlewares.validExpense, ControllerExpense.create);
router.get('/:id', ControllerExpense.getById);
router.put('/:id', ControllerExpense.updateExpense);
router.get('/', ControllerExpense.getAll);

module.exports = router;
