

const Counter = require('../common/models/counter');

async function generateProductCode() {
  const c = await Counter.findOneAndUpdate(
    { type: 'product' },
    { $inc: { value: 1 } },
    { upsert: true, new: true },
  );
  const baseCounter = 1234;
  const prefix = 'BIN';
  return prefix + (c.value + baseCounter);
}

async function generateOrderNumber() {
  const c = await Counter.findOneAndUpdate(
    { type: 'order' },
    { $inc: { value: 1 } },
    { upsert: true, new: true },
  );
  const baseCounter = 1234;
  const prefix = 'ODR';
  return prefix + (c.value + baseCounter);
}

module.exports = {
  generateProductCode,
  generateOrderNumber,
};
