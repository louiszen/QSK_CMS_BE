# Coding Instruction - Quick Starter Kit (**NodeJS** Backend) **IZOGears Base**

## **Config / Credentials Referer** :warning:

Everytime you want to reference to SYSConfig or SYSCredentials. <br/>
Please refer to the corresponding SYSConfig.js or SYSCredentials.js in IZOGears folder. <br/>
It will redirect to the correct script.

---

## **API Settings**

### **Express Dynamic Routing**
> See [app.js](./IZOGears/app.js)

`app.js` serves as the app entry point. <br/>
It holds an dynamic routing `/:cat/:subcat/:action` instead of legacy separated route. <br/>
The API funcs are linked up through [__SYSDefault/APIConfig/cores.js](./__SYSDefault/APIConfig/cores.js)

Normally, the `core` is a 3-layer `JSObject` <br/>
that coresponding to the location params in the dynamic route `cat`, `subcat`, `action`. <br/>
In the other words, we can find the `/CommonAPI/Env/Init` under `cores.CommonAPI.Env.Init`, <br/>
 i.e., `cat = "CommonAPI"`, `subcat = "Env"`, `action = "Init"`

 The end point should be assoicated with a `async` function having <br/>
 `req.body, req.params, username, req.file, res` as parameters. <br/>
 Usually, it would only use the first three parameters and rename into `(_opt, _param, _username, _files, _res)`

 | Fields | Description |
 | :--- | :--- |
 | _opt | The body of request, you can get all the data sent from the client here |
 | _param | The cat, subcat, action information of the request |
 | _username | The associated username of the request, you can check authority with `ZGate` |
 | _files | The file sent by the client |
 | _res | Express response class, need when you have to direct control the header sending back |

 Therefore, for the most of the case, the end point script would be
 ```js
  module.exports = async (_opt, _param, _username) => {
    //code here
  }
 ```

 All the return of this function would be redirect and sent to the client.
 Suggest using utils [Response](./IZOGears/_CoreWheels/Utils/Response.js) for decorating the responses:
 ```js
//link may be set upon folder location
const _base = require('../../../IZOGears/_CoreWheels'); 
const { Response } = _base.Utils;
module.exports = async (_opt, _param, _username) => {
  return Response.Send(true, {}, "");
}
```


All the `POST` request should be passed through this routing to make sure <br/>
all the requests are authenticated and authorized. <br/>
Error catching will handle and response with corresponding error messages <br/>
if the request is unauthorized, not exist, denied or the API thrown any error.

All APIs should response with a standardized JSObject:
```js
{
  Success: Boolean,
  payload: *
}
```
### **Bypass Authentication** :exclamation:

Not all the APIs may need to provide authentication. <br/>
You can setup rules to let the system ignore authentication checking upon API access.
[__SYSDefault/APIConfig/bypass.js](./__SYSDefault/APIConfig/bypass.js)

### **Modules Initialization**

Functions should be well organized and modularized.<br/>
Some modules may have to initialize upon the start of the server. <br/>
You can create those modules by extending the class [Initializable](./IZOGears/_CoreWheels/Extensible/Initializable.js) <br/>
Put the module in to the list of [__SYSDefault/APIConfig/inits.js](./__SYSDefault/APIConfig/inits.js) <br/>
`OnLoad` function would be called upon the program starts.

---
## **VSCode Extensions**

### **Custom code template**

You can setup templates for boilerplate codes, and press `~` to use customized templates.

Name: custom code template <br/>
Id: yinjun.custom-code-template<br/>
Description: <br/>
Version: 0.0.2<br/>
Publisher: yinjun<br/>
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=yinjun.custom-code-template

### **Git Graph**

Visualize your branch for easy merging.

Name: Git Graph<br/>
Id: mhutchie.git-graph<br/>
Description: View a Git Graph of your repository, and perform Git actions from the graph.<br/>
Version: 1.30.0<br/>
Publisher: mhutchie<br/>
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph

---
## **Add Database Name Mapping**

1. Open [__SYSDefault/_DBMAP.js](./__SYSDefault/_DBMAP.js)
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

---
## **Step-by-step creating API**

In this session, you will learn how to create an API in this framework.

### **1. Define the categries, subcategories and action of the API**
All of the APIs in this framework should be **3-layered** routing.
For example, we need to develop a API to add a user into the `User` database,
we should be set the route as `/Config/User/Add`.

### **2. Create JS script and link the API to `cores`**
Under `cores/Config`, you should see an `index.js`.
Edit it to
```js
const User = require("./User");
module.exports = {
  User
};
```

In the folder add another folder `User` and inside the folder, <br/>
create `index.js` and `Add.js`.

Edit `index.js` to 
```js
const Add = require("./Add");
module.exports = {
  Add
};
```

The main part of API is the `Add.js`.
You can press `~` and select `be-normalAPI.js` for the template.
or direct edit it to
```js
//link may be set upon folder location
const _base = require('../../../IZOGears/_CoreWheels'); 
const { Response } = _base.Utils;
module.exports = async (_opt, _param, _username) => {
  return Response.Send(true, {}, "");
}
```

### **3. Implement the procedures**
Implement the codes in the functions.

### **4. Restart the program and test**
Click the `Restart` button or `(Ctrl+Shift+F5)`

---

## **Generic Table Operations**

For most of the time, API is used to retrieve or manipulate the data in database. <br/>
`IZOGears` offers and a set of database operations which can be found in [IZOGears/GENERIC/Tables/Simple](./IZOGears/GENERIC/Tables/Simple/index.js)

> :warning: **Tricky Generic**: <br/>
> The ***Subcat*** of the routing (which should be equal to the folder name that containing the script referencing these functions would be mapped to [_DBMAP.js](./__SYSDefault/_DBMAP.js) to get the database name. i.e., <br/>
> If I reference the functions in `./cores/Tables/User`, the GENERIC functions would get `_DBMAP.User` as the database name for these operations, and we can call it by `/Tables/User/Add`, etc.


### **Generic table operating endpoints:**
| Action | Description |
| :--- | :--- |
| `Add` | Insert the whole `req.body.data` as document into the database |
| `Delete` | Delete the doc which have the same `_id` of `req.body.data` |
| `DeleteBulk` | Delete the docs which `_id` is included in `req.body.data.selected` | 
| `Duplicate` | Clone and Insert the document in `req.body.data` with a random `_id` |
| `Edit` | Edit the doc which have the same `_id` of `req.body.data` |
| `Export` | Export all the docs which `_id` is included in `req.body.data.selected` with `req.body.data.schema` |
| `Get` | Get the doc which `_id` is the same as `req.body.data.docID` |
| `Import` | Import an `.xlsx` with `req.body.schema` as schema |
| `Info` | Get the basic information of that database |
| `List` | List the doucments in the database with selector `req.body.data.selector` |
| `Replace` | :warning: Deprecated |
| `SortedList`  | :warning: Deprecated |



### :smile: **Step-by-step Quick Generic Setup** :smile: 

In this session, we would like to create API for all the operations managing the documents in database `item`

### **1. Insert database name mapping in `_DBMAP.js`**

1. Open [__SYSDefault/_DBMAP.js](./__SYSDefault/_DBMAP.js)
2. Add a `Item` field redirect to database `"test"`
```js
{
  ...,
  Item: "item"
}
```

### **2. Create Scripts and Index**

1. We have to create a folder `Item` under `./cores/Tables`
2. In the folder `./cores/Tables/Item`, create also the `index.js`
3. Edit `./cores/Tables/index.js`
Add
```js
const Item = require("./Item");

module.exports = { 
  //...,
  Item
};

```
4. Edit `./cores/Tables/Item/index.js`

Either use template `~generic_tableoper.js`
**OR**
```js
const _Generic = require('../_Generic');

const Add = _Generic.Add;
const Delete = _Generic.Delete;
const DeleteBulk = _Generic.DeleteBulk;
const Duplicate = _Generic.Duplicate;
const Edit = _Generic.Edit;
const Export = _Generic.Export;
const Get = _Generic.Get;
const Import = _Generic.Import;
const Info = _Generic.Info;
const List = _Generic.List;

module.exports = {
  Add,
  Delete,
  DeleteBulk,
  Edit,
  Export,
  Duplicate,
  Get,
  Import,
  Info,
  List
}
```

### **3. Restart the program.**

You can now call the `/Tables/Item/*` API.

:star: **FINISH** :star:

Normally [_Generic.js](./cores/Tables/_Generic.js) would be linked up the the 
[IZOGears/GENERIC/Tables/Simple](./IZOGears/GENERIC/Tables/Simple/index.js) <br/>

If you want to customize any function or disable some of them.
Just edit the `index.js` referencing to link the field to destinated functions or delete them if you don't want to expose the API.

You may also try out other GENERIC templates under `GENERIC/Tables`