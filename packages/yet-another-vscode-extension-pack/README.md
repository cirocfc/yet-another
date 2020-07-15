<img src="https://github.com/cirocfc/yet-another/blob/master/packages/yet-another-vscode-extension-pack/icons/512.png" width="150px" align="right"/>

# yet-another-vscode-extension-pack

This extension pack adds features to make my life easier while working with VS Code

## Note

**Please read & follow the [Recommended Settings](#Recommended-Settings) section to enable all features.**

## Recommended-Settings

### Setup VS Code

Change some configs for ESLint and Spell Checker in VS Code settings:

```js
{
  .
  "eslint.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["javascript", "vue", "html"],
  "eslint.options": {
    "extensions": [".vue", ".js"]
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "cSpell.language": "pt,pt-BR,en,en-US",
}
```

### Setup ESLint

- Install following packages:

```bash
npm i -D \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-vue \
  eslint-plugin-prettier \
  @vue/cli-plugin-eslint \
  @vue/eslint-config-prettier \
  prettier \
  prettier-eslint \
  babel-eslint
```

or

```bash
yarn add -D \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-vue \
  eslint-plugin-prettier \
  @vue/cli-plugin-eslint \
  @vue/eslint-config-prettier \
  prettier \
  prettier-eslint \
  babel-eslint
```

- Create/update ESLint config file (`package.json`, `.eslintrc.js` or `.eslintrc.json`) in your project folder:

```js
// config ESLint and Prettier to work with Vue

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier', 'vue'],
  extends: ['plugin:vue/recommended', 'prettier', 'prettier/vue'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```

## Extensions Included in this pack

- [Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.adddoccomments) -
  Adds jsdoc @param and @return tags for selected function signatures in JS and TS
- [Auto-Close-Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) -
  Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text
- [Auto-Rename-Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) -
  Auto rename paired HTML/XML tag
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) -
  Improve your code commenting by annotating with alert, informational, TODOs, and more!
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=coenraads.bracket-pair-colorizer) -
  A customizable extension for colorizing matching brackets
- [Brazilian Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian) -
  Brazilian Portuguese dictionary extension for VS Code
- [Change Case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) -
  Quickly change the case (camelCase, CONSTANT_CASE, snake_case, etc) of the current selection or current word
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) -
  Spelling checker for source code
- [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) -
  Computes complexity in TypeScript / JavaScript files
- [CSS-in-JS](https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js) -
  CSS-in-JS autocomplete and conversion
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) -
  Support for dotenv file syntax
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) -
  EditorConfig Support for Visual Studio Code
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) -
  Integrates ESLint into VS Code
- [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle) -
  A VS Code extension that allows you to toggle the formatter on and off with a simple click
- [GitLens](https://marketplace.visualstudio.com/items?itemName=robertoachar.vscode-essentials-snippets) -
  Supercharge the Git capabilities built into Visual Studio Code
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) -
  Display import/require package size in the editor
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) -
  Makes indentation easier to read
- [JavaScript (ES6) Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) -
  Code snippets for JavaScript in ES6 syntax
- [Jest](https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest) -
  Use Facebook's Jest With Pleasure
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets) -
  Code snippets for testing framework Jest
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) -
  All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint) -
  Markdown linting and style checking for Visual Studio Code
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) -
  npm support for VS Code
- [npm IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) -
  Visual Studio Code plugin that autocompletes npm modules in import statements
- [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) -
  Visual Studio Code plugin that autocompletes filenames
- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode) -
  Polaroid for your code
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) -
  VS Code plugin for prettier/prettier
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=simonsiefke.svg-preview) -
  Preview for Svg files
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) -
  Show TODO, FIXME, etc. comment tags in a tree view
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) -
  Vue tooling for VSCode
- [VSCode Essentials Snippets](https://marketplace.visualstudio.com/items?itemName=robertoachar.vscode-essentials-snippets) -
  A collection of essentials snippets for Visual Studio Code
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) -
  Icons for Visual Studio Code
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) -
  Syntax highlighting for styled-components
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) -
  Snippets that will supercharge your Vue workflow

## Credits

All credits goes to original authors of the above mentioned extensions

**Happy Coding!**
