const ServiceExpense = require('../services/ServiceExpense');
const httpStatusCodes = require('../utils/httpStatusCodes');

const create = async (request, response, next) => {
  try {
    const { description, value, date } = request.body;

    const expense = await ServiceExpense.create(description, value, date);

    return response.status(httpStatusCodes.created).json(expense);
  } catch (error) {
    return next(error);
  }
};

const getAll = async (_request, response, next) => {
  try {
    const getAllExpenses = await ServiceExpense.getAll();

    return response.status(httpStatusCodes.ok).json(getAllExpenses);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getAll,
};