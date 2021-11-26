## Entry Point
IZOGears/server.js > IZOGears/app.js
```
  npm start
```

## Duplicate for use

1. Create a repo <reponame> on Github

2. At root directory:
```
git clone --recurse-submodules https://github.com/louiszen/QSK_CMS_BE.git

```

3. rename folder to <reponame>

4. At project folder:
```
git remote set-url origin https://github.com/<userName>/<reponame>
git remote add upstream https://github.com/<userName>/<reponame>
git push origin master
git push --all
```

## Build API Auth Tree
```
  npm run authtree
```

## Added scripts

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint --fix --ext .js,.jsx .",
  "postinstall": "npx basetag link --hook"
},
## Dev Prerequisites

### Resolve ../../../path to $/path !!! not compatible to nexe/ dropped

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

## nexe (Build exe from NodeJS)
```
npm i -g nexe
nexe server.js -o QSK.exe --build
```
if errors, 
download https://www.nasm.us/pub/nasm/releasebuilds/2.15.04/win64/
```
npm i windows-build-tools -g
```

### Docker
```
docker build --pull --rm -f "Dockerfile" -t gptwcmsbe:latest "."
```

Please use
```
npm run envtemp <env>
npm run docker
```

