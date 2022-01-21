const Joi = require('joi');
const invalidData = require('../utils/invalidData');
const httpStatusCodes = require('../utils/httpStatusCodes');

const validExpense = (req, _res, next) => {
  const { error } = Joi.object({
    description: Joi.string().not().empty().required(),
    value: Joi.string().not().empty().required(),
    date: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(invalidData(error.message, httpStatusCodes.badRequest));

  next();
};

module.exports = validExpense;