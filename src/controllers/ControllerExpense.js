const ServiceExpense = require('../services/ServiceExpense');
const httpStatusCodes = require('../utils/httpStatusCodes');

const create = async (request, response, _next) => {
  try {
    const { description, value, date } = request.body;

    const expense = await ServiceExpense.create(description, value, date);

    return response.status(httpStatusCodes.created).json(expense);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {
  create,
};