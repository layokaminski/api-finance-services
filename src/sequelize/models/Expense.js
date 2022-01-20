const Expense = (sequelize, DataTypes) => {
  const newExpense = sequelize.define('Expense', {
    description: DataTypes.STRING,
    value: DataTypes.NUMBER,
    date: DataTypes.DATE(6),
  }, { timestamps: false });

  return newExpense;
};

module.exports = Expense;