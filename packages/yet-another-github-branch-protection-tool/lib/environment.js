// @ts-check
const fs = require('fs');
const dotenv = require('dotenv');

const { getRootPath } = require('./root');

function getLocalEnv() {
  try {
    return dotenv.parse(fs.readFileSync(`${getRootPath()}/.env`));
  } catch {
    console.warn('.env not found!');
    return {};
  }
}

module.exports = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  ...getLocalEnv(),
};
