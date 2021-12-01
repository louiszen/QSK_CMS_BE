# Quick Starter Kit (**NodeJS** Backend) **IZOGears Base**

This project offers a standard **RESTful** API **NodeJS** server with an optional login system. <br/>
Can be easily work with [Quick Starter Kit (**ReactJS** Frontend)](https://github.com/louiszen/QSK_CMS_UI.git)
| Features | Details |
| :---|:---|
| *Quick Database Operating Layer Support* | CouchDB, MongoDB |
| *Authentication support* | Username-Password, SMSOTP, Window Authentication |
| *Authorization method* | JWT |

[Project Initialization](./README-Init.md)<br/>
[Coding Instruction](./README-CodeGuy.md) <br/>
[IZOGears](./IZOGears/README.md)

---

## **Getting Started**
You have to clone the object and rebase the project to your own repo before use.

1. Create a repo `<reponame>` on Github

2. Clone the project with `--recurse-submodules` at root directory.
```bash
git clone --recurse-submodules https://github.com/louiszen/QSK_CMS_BE.git

```

3. rename folder to `<reponame>`

4. At the **project folder**:
```bash
git remote set-url origin https://github.com/<userName>/<reponame>
git remote add upstream https://github.com/<userName>/<reponame>
git push origin master
```

5. Install node dependencies
```
npm i
```

---

## **Config the program**

### ***Generate System Credentials*** & ***link up database***
First you need to generate `SYSCredentials.js`. <br/>
Please run:
```
  npm run credentials
```
`SYSCredentials.js` will be generated at the root folder.
Please set minimal the `ENV`, `JWT.TokenSecret`, and the database credentials.

If you have installed **CouchDB**,
The default settings should be connecting to http://localhost:5984
### ***Generate Authority Controls*** ( :exclamation: Have to rerun if API changed )
```
  npm run authtree
```
`SYSAuthTree.js` will be generated at the root folder.

### **__SYSDefault**

**Files**
| Filename | Description |
| :--- | :--- |
| `SYSConfig.js` | The main settings for the system. To setup the fields, please also open typedef file [SYSConfig](./IZOGears/__Typedef/SysConfig.js) 
| `DevUser.js` | The default dev user for local system admin. To setup the fields, please also open typedef file [User](./IZOGears/__Typedef/User.js)
| `AllAuth.js` | The definition of the authority tree |
| `_DBMAP.js` | A key-match script for database name |

**Folders**
| Folder & File | Description |
| :--- | :--- |
| `__DATA` | Data files for importing when project initialization. |
| `APIConfig/bypass.js` | Bypass Authority Checking rules definition. |
| `APIConfig/cores.js` | :exclamation: :exclamation: :exclamation: A JSObject that collects **ALL** the API |
| `APIConfig/inits.js` | Classes / components used to be initialized at program start. |
| `Definition` | Enum definition Object |
| `InitDocs` | Documents to be put in the database upon initialization |
| `InitOperations` | Operations to be executed upon initialization |
| `modules` | Project-wise custom modules |

---


## **Run the program**

If you are using **VSCode**, press `F5` to run the program.

**OR** you can use cmd to run the program ***entry point***:
```
npm start
```

**OR** you can use node to run the ***entry script***:
```
node ./IZOGears/server.js
```

---

## **Read the Code**
The server entry app and the express routing is in `./IZOGears/app.js`

| Folder / files | Files to be stored |
| :--- | :--- |
| `__SYSDefault` | The project-wise settings which may be customized for each specific project |
| `.custom-template` |  Please download **VSCode** Extension: `yinjun.custom-code-template` to use this feature |
| `.vscode` | Launch setting for **VSCode** |
| `cores` | Where you put your API codes |
| `cores/__Internal` | Caution: Code injection folder for `nexe` compilation |
| `cores/Config` | API for config modification |
| `cores/Data` | API for data modification |
| `cores/Tables` | API for data tables operation |
| `Images` | Folder open access for image used for Frontend |
| `IZOGears` | :warning: IZO internal codes. Do not modify or delete. See [README](./IZOGears/README.md) |
| `manifest` | **Azure Pipelines** manifest yml |
| `pipelines` | **Azure Pipelines** build pipeline yml |
| `ΩRUNTIME` | Program runtime files |
| `.gitignore` | Git ignores |
| `.gitmodules` | Git submodules control |
| `package-lock.json` | npm documents |
| `package.json` | npm documents for managing npm package |
| `Dockerfile` | Necessity for building Dockerize Image |
| `remoteConfig.js` | The remote config is to get the database instance and other settings from database |
| `SYSAPI.js` | Generated list of all available API from the system |
| `SYSAuthTree.js` | Generated Control Setting Files for API Access |
| `SYSCredentials.js` | Generated Credentials files for setting |
| `Version.js` | The project-wise Version sepcifier |
---

## **Modified npm run scripts**
```json
"scripts": {
  "start": "node IZOGears/server.js",
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint --fix --ext .js,.jsx .",
  "env": "bash -c 'echo NODE_ENV=%npm_config_env% > .env.temp '",
  "build": "(if exist \"./_build\" rmdir /s /Q \"./_build\") && nexe server.js -o ./_build/release.exe --build && copy \".env.sample\" \"./_build/.env\"",
  "docker": "docker build --pull --rm -f \"Dockerfile\" -t qsk:latest \".\" && docker rmi $(docker images -f \"dangling=true\" -q)",
  "lint": "eslint --fix --ext .js,.jsx .",
  "genpipes": "node IZOGears/__CodeGen/AzurePipelines.js",
  "authtree": "node IZOGears/__CodeGen/APIAuthTree.js",
  "credentials": "node IZOGears/__CodeGen/Credentials.js"
},
```

---

## **Others** 

### **Resolve ../../../path to $/path** (:warning: not compatible to nexe ) (:warning:  ***Obselete***) 

The aim is to minify the effort for setting root folder as package $.<br/>
However, it is not compatible to nexe
```
npm install -g npm@latest
npm install --save basetag
npx basetag link --hook

npx basetag rebase
```

### **Eslint Syntax Checking**

```
npm install @babel/eslint-parser --save
```

Rules:
```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-console": "off",
    "require-await": "off",
    "no-use-before-define": "error",
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

Run to check the  syntax
```
npm run lint
```

## **nexe (Build exe from NodeJS)**
```
npm i -g nexe
nexe server.js -o QSK.exe --build
```
if errors, 
download https://www.nasm.us/pub/nasm/releasebuilds/2.15.04/win64/
```
npm i windows-build-tools -g
```

## **Dockerize**
```
docker build --pull --rm -f "Dockerfile" -t qsk:latest "."
```

Please use
```
npm run envtemp <env>
npm run docker
```

## **Azure Pipelines**
Generate Azure Pipelines Docs
```
npm run genpipes
```

## **Maintain API Access Control**

### ***Generate Authority Controls*** ( :exclamation: Have to rerun if API changed )
```
  npm run authtree
```
`SYSAuthTree.js` will be generated at the root folder. <br/>
`SYSAPI.txt` is the entire API List out of the system.

## **Git Submodules**
Project is linked to [IZOGears](https://github.com/louiszen/IZOGears)