const validate = require('validate.js');
// const Product = require('../../models/product');


// validate update profile
function validateProductData(data) {
  const rules = {
    name: {
      presence: { allowEmpty: false },
    },
    type: {
      presence: { allowEmpty: false },
    },
    price: {
      presence: { allowEmpty: false },
    },
    quantity: {
      presence: { allowEmpty: false },
    },
    images: {
      presence: { allowEmpty: false },
    },
    'size.length': {
      presence: { allowEmpty: false },
    },
    'size.width': {
      presence: { allowEmpty: false },
    },
    'size.height': {
      presence: { allowEmpty: false },
    },
    weight: {
      presence: { allowEmpty: false },
    },
    weightAllowance: {
      presence: { allowEmpty: false },
    },
    materialsAllowance: {
      presence: { allowEmpty: false },
    },
    status: {
      presence: { allowEmpty: false },
    },
  };

  return validate(data, rules, { format: 'grouped' });
}

function getQueryData({ limit = 10, page = 1 }) {
  const limit2 = parseInt(limit, 10);
  const page2 = parseInt(page, 10);
  const conditions = {
  };

  // calculate offset
  const offset = (page2 - 1) * limit2;
  return {
    conditions,
    limit: limit2,
    page,
    offset,
  };
}

module.exports = {
  getQueryData,
  validateProductData,
};
