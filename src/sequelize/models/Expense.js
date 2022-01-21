const Expense = (sequelize, DataTypes) => {
  const newExpense = sequelize.define('Expense', {
    description: DataTypes.STRING,
    value: DataTypes.NUMBER,
    date: DataTypes.STRING,
  }, { timestamps: false });

  return newExpense;
};

module.exports = Expense;