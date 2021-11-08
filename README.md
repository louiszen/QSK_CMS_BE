## Added scripts

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint --fix --ext .js,.jsx .",
  "postinstall": "npx basetag link"
},
## Dev Prerequisites

### Resolve ../../../path to $/path

```
npm install -g npm@latest
npm install --save basetag
npx basetag link --hook

npx basetag rebase
```

### Eslint Checking

```
npm install @babel/eslint-parser --save
```

Rules:
```
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "require-await": "off",
    "no-await-async-call/no-await-async-call": "warn"
  },
  "extends": "eslint:recommended",
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "requireConfigFile": false
  },
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": ["no-await-async-call"]
}
```

Checking command
```
npm run lint
```