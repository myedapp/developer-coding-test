const { expect } = require('chai');
const supertest = require('supertest');
const server = require('../index');
const log = require('../modules/common/log');
const User = require('../modules/app/models/user');

const request = supertest(server);
const tokens = [];

/**
 * Get api token that present for a user
 * @param {String} userId
 */
async function getApiToken(userId) {
  if (tokens[userId] === undefined) {
    try {
      const user = await User.findById(userId);
      tokens[userId] = user.createToken().value;
    } catch (error) {
      log.error('Error while generating access token');
      throw error;
    }
  }

  return tokens[userId];
}

module.exports = {
  expect,
  request,
  getApiToken,
};
