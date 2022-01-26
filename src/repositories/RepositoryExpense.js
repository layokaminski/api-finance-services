const { Expense } = require('../sequelize/models');

const create = async (description, value, date) => {
  const expense = await Expense.create({ description, value, date });

  return expense;
};

const getAll = async () => {
  const getAllExpenses = await Expense.findAll();

  return getAllExpenses;
};

const getById = async (id) => {
  const getExpense = await Expense.findByPk(id);

  return getExpense;
};

const updateExpense = async (id, description, value, date) => {
  await Expense.update({ id, description, value, date }, { where: { id } });

  const getExpense = await Expense.findByPk(id);

  return getExpense;
};

module.exports = {
  create,
  getAll,
  getById,
  updateExpense,
};
