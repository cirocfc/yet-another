// @ts-check
const merge = require('deepmerge');

function getProjectConfigFromProjectsList({ projects = [], project = '' } = {}) {
  return Object.entries(projects).reduce(
    (config, [projectName, projectConfig]) => (projectName === project ? projectConfig : config),
    {},
  );
}

function generateBranchProtectionRules({ defaultConfig = {}, projectConfig = {}, locked = false } = {}) {
  return {
    ...merge(defaultConfig.base, projectConfig?.base ?? {}),
    ...merge(defaultConfig.protection, projectConfig?.protection ?? {}),
    ...(locked ? merge(defaultConfig.locked, projectConfig?.locked ?? {}) : {}),
  };
}

module.exports = {
  generateBranchProtectionRules,
  getProjectConfigFromProjectsList,
};
