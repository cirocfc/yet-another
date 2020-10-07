// @ts-check
const { execSync } = require('child_process');

function getRootPath() {
  try {
    return execSync('git rev-parse --show-toplevel').toString().trim();
  } catch {
    return process.cwd();
  }
}

module.exports = {
  getRootPath,
};
