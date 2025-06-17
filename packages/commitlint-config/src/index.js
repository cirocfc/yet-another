// @ts-check
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  /**
   * * Overrides default allowed types
   * ? https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/src/index.ts
   */
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix']],
  },
};
