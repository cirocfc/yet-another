[![npm](https://img.shields.io/npm/v/@cirocfc/yet-another-github-branch-protection-tool.svg?style=flat-square)](https://www.npmjs.com/package/@cirocfc/yet-another-github-branch-protection-tool) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

<img src="https://raw.githubusercontent.com/cirocfc/yet-another/master/packages/yet-another-github-branch-protection-tool/icons/128.png" width="150px" align="right"/>

# yet-another-github-branch-protection-tool

Just a simple helper to protect Github branches using Octokit and restrictions.

## Installation

```sh
yarn add @cirocfc/yet-another-github-branch-protection-tool
```

Create a `config` directory and place in it both your `defaults.yaml` and `projects.yaml` configuration.

## Usage

In order to use this package, you must provide a GITHUB_TOKEN environment variable with a [Personal access tokens](https://github.com/settings/tokens). If you don't have one, go ahead and create it.

After setting the GITHUB_TOKEN value, you can run the commands:

- To lock a branch:

  ```sh
  yarn ya-protect-branch --project=<project-name-from-projects.yaml> --locked
  ```

- To unlock a branch:

  ```sh
  yarn ya-protect-branch --project=<project-name-from-projects.yaml>
  ```

That's it. Enjoy!
