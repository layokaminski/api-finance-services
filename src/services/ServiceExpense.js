const moment = require('moment');
const RepositoryExpenses = require('../repositories/RepositoryExpense');
const httpStatusCodes = require('../utils/httpStatusCodes');
const invalidData = require('../utils/invalidData');

const create = async (description, value, date) => {
  if (date < moment().format('DD/MM/YYYY')) {
    throw invalidData('Late expenses cannot be placed',
      httpStatusCodes.badRequest);
  }

  const expense = await RepositoryExpenses
    .create(description, value, date);

  return expense;
};

const getAll = async () => {
  const getAllExpenses = await RepositoryExpenses.getAll();

  return getAllExpenses;
};

const getById = async (id) => {
  const getExpense = await RepositoryExpenses.getById(id);

  if (!getExpense) {
    throw invalidData('Expense does not exist', httpStatusCodes.notFound);
  }

  return getExpense;
};

const updateExpense = async (id, description, value, date) => {
  const getExpense = await RepositoryExpenses
    .updateExpense(id, description, value, date);

  if (!getExpense) {
    throw invalidData('Expense does not exist', httpStatusCodes.notFound);
  }

  return getExpense;
};

module.exports = {
  create,
  getAll,
  getById,
  updateExpense,
};
