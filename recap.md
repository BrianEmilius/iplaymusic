# Prettier

Formatere koden efter en standard formatering.
`npm i -D prettier`
`npm i -D eslint-config-prettier`

oprette .prettierignore og .prettierrc.json filer

# Pre-commit hook

Kører en kommando FØR vi commiter.

## Pre-commit hooks bruges til

* køre prettier
* køre vores tests

`npx mrm lint-staged` <-- installerer et pre-commit hook for prettier
`npx husky install` <-- installer husky mappen
`npx husky add .husky/pre-commit "npm test"` <-- installerer et pre-commit hook for vores tests

### Installer cross-env
`npm i -D cross-env`

i package.json: `"test": "cross-env CI=true react-scripts test"`