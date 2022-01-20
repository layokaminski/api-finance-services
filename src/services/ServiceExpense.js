const RepositoryExpenses = require('../repositories/RepositoryExpense');

const create = async (description, value, date) => {
  const expense = await RepositoryExpenses
    .create(description, value, date);

  return expense;
};

module.exports = {
  create,
};
