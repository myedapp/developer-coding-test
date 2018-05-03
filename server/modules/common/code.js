const Code = require('./models/code');
const ms = require('ms');
const { randomCode } = require('./helpers');

async function generate(data, duration = '10m') {
  const expireAt = new Date();
  expireAt.setSeconds(expireAt.getSeconds() + (ms(duration) / 1000));

  const generateUniqueCode = async () => {
    const code = randomCode(0, 9999);
    const exist = await Code.findOne({ code });
    return exist ? generateUniqueCode() : code;
  };

  try {
    await Code.remove({
      expireAt: { $lt: new Date() },
    });
    const code = await generateUniqueCode();
    const model = new Code({
      code,
      data,
      expireAt,
    });
    await model.save();
    return code;
  } catch (error) {
    throw error;
  }
}

async function verify(code, remove = false) {
  try {
    let model;
    if (remove) {
      model = await Code.findOneAndRemove({
        code,
        expireAt: { $gte: new Date() },
      });
    } else {
      model = await Code.findOne({
        code,
        expireAt: { $gte: new Date() },
      });
    }
    return model ? model.data : false;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generate,
  verify,
};
