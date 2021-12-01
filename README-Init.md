# Coding Instruction - Quick Starter Kit (**NodeJS** Backend) **IZOGears Base**

Project can be started with empty database.
You can edit `SYSConfig.Init.OnStart` in [SYSConfig](./__SYSDefault/SYSConfig.js) to tell the program try initialization on start.
If the field is ticked, the program will try to get `INTIALIZED` document in `Config` database. If it does not exists, the program will run [IZOGears/CommonAPI/Env/Init.js](./IZOGears/CommonAPI/Env/Init.js) to initialize the database.

The initialization consists of the following procedures:
1. Initialize necessary config, user, userroles documents.
2. Insert documents in `__SYSDefault/InitDocs` folder in corresponding database, database name key will be the folder name, i.e. `Test/*` => `_DBMAP.Test`
3. Start InitOperations in `__SYSDefault/InitOperations` folder.
4. Insert `INITIALIZED` to `Config` database to indicate the project is done initialization.

You may need to add database name in `_DBMAP` to tell the system the database name - folder name matching.

## **Add Database Name Mapping**

1. Open [__SYSDefault/_DBMAP.js](__SYSDefault/_DBMAP.js)
2. Add a `Test` field redirect to database `"test"`
```js
{
  ...,
  Test: "test"
}
```
3. Get the database name through _DBMAP. <br/>
( :warning: Do not hardcode the database name string. )
```js
 const _DBMAP = require("~/__SYSDefault/_DBMAP");
 let dbname = _DBMAP.Test;
```