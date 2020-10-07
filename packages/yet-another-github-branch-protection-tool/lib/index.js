// @ts-check
const { argv } = require('yargs');
const { loadDefaultConfig, loadProjectsConfig } = require('./configs');
const { getProjectConfigFromProjectsList, generateBranchProtectionRules } = require('./protection');
const { updateBrachProtection } = require('./update');

const defaultConfig = loadDefaultConfig();
const { projects } = loadProjectsConfig();

const { project = '', locked = false } = argv;

if (!project) {
  throw new Error('Project argument was not provided!');
}

const projectConfig = getProjectConfigFromProjectsList({
  project,
  projects,
});

if (!projectConfig) {
  throw new Error('Project config does not exist!');
}

const PROTECTION_RULES = generateBranchProtectionRules({ projectConfig, defaultConfig, locked: !!locked });

try {
  updateBrachProtection(PROTECTION_RULES);
} catch (e) {
  console.error(e);
}
