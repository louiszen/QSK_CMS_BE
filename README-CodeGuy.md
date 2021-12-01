# Coding Instruction - Quick Starter Kit (**NodeJS** Backend) **IZOGears Base**

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

