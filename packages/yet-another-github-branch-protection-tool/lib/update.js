// @ts-check
const { Octokit } = require('@octokit/rest');

const { GITHUB_TOKEN } = require('./environment');

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

async function updateBrachProtection(config) {
  return await octokit.repos.updateBranchProtection(config);
}

module.exports = {
  updateBrachProtection,
};
