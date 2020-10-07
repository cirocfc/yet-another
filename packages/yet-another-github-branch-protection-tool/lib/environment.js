// @ts-check
const fs = require('fs');
const dotenv = require('dotenv');

const { getRootPath } = require('./root');

const localEnv = dotenv.parse(fs.readFileSync(`${getRootPath()}/.env`));

module.exports = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  ...localEnv,
};
