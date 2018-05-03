const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const ms = require('ms');
const mongoose = require('mongoose');
const config = require('../../config');
const validate = require('validate.js');
const querystring = require('querystring');

function notFoundExc(message) {
  return {
    status: 404,
    code: 'resource_not_found',
    message,
  };
}

function validationExc(message, errors) {
  return {
    status: 400,
    code: 'invalid_data',
    message,
    errors,
  };
}

function unauthorizedExc(message) {
  return {
    status: 401,
    code: 'unauthorized',
    message,
  };
}

/**
 * @returns Promise
 */
function connectToDb() {
  mongoose.set('debug', config.db.debug);
  mongoose.Promise = global.Promise;
  const options = {
    config: { autoIndex: false },
    useMongoClient: true,
  };
  return mongoose.connect(config.db.uri, options);
}

function encryptPassword(value) {
  return bcrypt.hashSync(value);
}

function verifyPassword(value, hash) {
  return bcrypt.compareSync(value, hash);
}

/**
 * Create an access token for user
 * @param {Object} user
 * @param {String} duration
 */
function createToken(user, duration) {
  const expireAt = new Date();
  expireAt.setSeconds(expireAt.getSeconds() + (ms(duration) / 1000));
  const value = jwt.sign({ userId: user._id }, config.appSecret, { expiresIn: duration });
  return {
    value,
    expireAt,
  };
}

function verifyToken(token) {
  let result = false;
  try {
    result = jwt.verify(token, config.appSecret);
  } catch (err) {
    logger.info('Validate access token failed.');
  }
  return result;
}

/**
 * Get value of nested property by path
 *
 * @param {Mixed} obj
 * @param {String} path
 * @param {Mixed} defVal default value when the result is undefined
 */
function getObjectValue(obj, path, defVal = undefined) {
  const result = validate.getDeepObjectValue(obj, path);
  return result || defVal;
}

function filterObjectKeys(obj, allowedKeys = []) {
  const result = {};
  allowedKeys.forEach((key) => {
    if (obj[key]) {
      result[key] = obj[key];
    }
  });
  return result;
}

function validateFileData(data) {
  const rules = {
    url: {
      presence: { allowEmpty: false },
    },
    filename: {
      presence: { allowEmpty: false },
    },
    mimeType: {
      presence: { allowEmpty: false },
    },
    bucket: {
      presence: { allowEmpty: false },
    },
    region: {
      presence: { allowEmpty: false },
    },
    key: {
      presence: { allowEmpty: false },
    },
  };
  return validate(data, rules, { format: 'grouped' });
}

function createWebUrl(path, params = null) {
  const q = params ? `?${querystring.stringify(params)}` : '';
  return `${config.webUrl}/${path}${q}`;
}

/**
 * Return string with padding
 * @param {Number} n number
 * @param {Number} width
 * @param {String} z padding character
 */
function pad(n, width, z = '0') {
  const str = n.toString();
  return str.length >= width ? str : new Array(width - str.length + 1).join(z) + str;
}

function randomCode(min, max) {
  const n = Math.floor((Math.random() * ((max - min) + 1)) + min);
  return pad(n, 4);
}

function shift(number, precision, reverseShift) {
  let p = precision;
  if (reverseShift) {
    p = -p;
  }
  const numArray = `${number}`.split('e');
  return +(`${numArray[0]}e${numArray[1] ? (+numArray[1] + p) : p}`);
}

function round(number, precision) {
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

module.exports = {
  notFoundExc,
  validationExc,
  unauthorizedExc,
  connectToDb,
  encryptPassword,
  verifyPassword,
  createToken,
  verifyToken,
  getObjectValue,
  filterObjectKeys,
  validateFileData,
  createWebUrl,
  randomCode,
  round,
};
