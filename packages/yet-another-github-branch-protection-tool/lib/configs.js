// @ts-check
const fs = require('fs');
const yaml = require('js-yaml');

const { getRootPath } = require('./root');

function loadDefaultConfig() {
  const root = getRootPath();

  if (fs.existsSync(`${root}/config/defaults.yaml`)) {
    return yaml.safeLoad(fs.readFileSync(`${root}/config/defaults.yaml`, 'utf8'));
  }

  throw new Error(`Defaults file not found!\nPlease, provide a "defaults.yaml" file at the ${root}/config directory.`);
}

function loadProjectsConfig() {
  const root = getRootPath();

  if (fs.existsSync(`${root}/config/projects.yaml`)) {
    return yaml.safeLoad(fs.readFileSync(`${root}/config/projects.yaml`, 'utf8'));
  }

  throw new Error(`Projects file not found!\nPlease, provide a "projects.yaml" file at the ${root}/config directory.`);
}

module.exports = {
  loadDefaultConfig,
  loadProjectsConfig,
};
