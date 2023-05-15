const { Category } = require('../models');
const status = require('../utils/status');

const createCategory = async (newCategory) => {
  try {
    const result = await Category.create(newCategory);
    return { type: status.Created, message: { id: result.id, name: result.name } };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

const getAllCategory = async () => {
  try {
    const result = await Category.findAll({ attributes: ['id', 'name'] });
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

module.exports = {
  createCategory,
  getAllCategory,
};