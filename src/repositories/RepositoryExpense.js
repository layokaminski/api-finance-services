const { Expense } = require('../sequelize/models');

const create = async (description, value, date) => {
  const expense = await Expense.create({ description, value, date });
  console.log(expense)
  return expense;
};

module.exports = {
  create,
};
