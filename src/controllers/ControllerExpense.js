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

const getById = async (request, response, next) => {
  try {
    const { params: { id } } = request;

    const getExpense = await ServiceExpense.getById(id);

    return response.status(httpStatusCodes.ok).json(getExpense);
  } catch (error) {
    return next(error);
  }
};

const updateExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description, value, date } = req.body;

    const updatedExpense = await ServiceExpense
      .updateExpense(id, description, value, date);

    return res.status(httpStatusCodes.ok).json(updatedExpense);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateExpense,
};