const { Expense } = require('../sequelize/models');

const create = async (description, value, date) => {
  const expense = await Expense.create({ description, value, date });

  return expense;
};

const getAll = async () => {
  const getAllExpenses = await Expense.findAll();

  return getAllExpenses;
};

module.exports = {
  create,
  getAll,
};
