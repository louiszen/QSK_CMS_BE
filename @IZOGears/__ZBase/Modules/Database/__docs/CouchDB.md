# **CouchDB**
CouchDB instance for connecting CouchDB using nano or Cloudant
## ***Dependencies***
`lodash`, `moment`, `nano`, `util`, `zlib`, `tarstream`, `targz`, `path`, `p-queue`, `Cloudant`, `BaseClass`, `Fs`
<br/>

## ***Functions***
## *`constructor`* 
---
```jsx
  constructor(env = process.env.NODE_ENV, Config = _config.Base.CouchDB, project = process.env.NODE_PROJECT) => CouchDB
```

### **Usage**
Create a new instance of CouchDB

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| env | `String` || `process.env.NODE_ENV` | The environment of the current project |
| Config | `Config` || `_config.Base.CouchDB` | The setting of the CouchDB instance |
| project | `String` || `process.env.NODE_PROJECT` | The project string of the current project |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `CouchDB` ||| CouchDB instance |

<br/>

## *`getDBConnector`* 
---
```jsx
  getDBConnector() => nano.ServerScope
```

### **Usage**
Get Cloudant / CouchDB Connector

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `nano.ServerScope` ||| Nano CouchDB connector |

<br/>

## *`Connect`* 
---
```jsx
  Connect(dbName) => nano.DocumentScope<any>
```

### **Usage**
Get nano.db.use instance

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `nano.DocumentScope<any>` ||| nano.db.use instance |
<br/>

## <span style="color: #569CD6">async</span> *`CreateDatabase`* 
---
```jsx
  CreateDatabase(dbName, noMSG = false) => Promise<{
    Success: Boolean,
    payload: nano.DatabaseCreateResponse
  }>
```

### **Usage**
Create Database if not exists

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
| noMSG | `Boolean` || `false` | Shows debug message |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DatabaseCreateResponse` ||| The return value from nano |
<br/>

## <span style="color: #569CD6">async</span> *`DestroyDatabase`* 
---
```jsx
  DestroyDatabase(dbName, noMSG = false) => Promise<{
    Success: Boolean,
    payload: nano.OkResponse
  }>
```

### **Usage**
Destroy database if exists

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
| noMSG | `Boolean` || `false` | Shows debug message |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.OkResponse` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`GetAllDatabases`* 
---
```jsx
  GetAllDatabases(noMSG = true) => Promise<{
    Success: Boolean,
    payload: [String]
  }>
```

### **Usage**
Get all the databases name in the CouchDB

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| noMSG | `Boolean` || `true` | Shows debug message |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[String]` ||| The list of database names |
<br/>

## <span style="color: #569CD6">async</span> *`Info`* 
---
```jsx
  Info(dbName) => Promise<{
    Success: Boolean,
    payload: nano.DatabaseGetResponse
  }>
```

### **Usage**
Get the database basic information

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DatabaseGetResponse` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`DocCount`* 
---
```jsx
  DocCount(dbName) => Promise<{
    Success: Boolean,
    payload: {
      doc_count: Number
    }
  }>
```

### **Usage**
Count the number of docs (exclude design doc)

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload.doc_count | `Number` ||| The number of documents (exclude design doc) |
<br/>

## <span style="color: #569CD6">async</span> *`List`* 
---
```jsx
  List(dbName, include_docs = false) => Promise<{
    Success: Boolean,
    payload: nano.DocumentListResponse<any>
  }>
```

### **Usage**
List all the documents in database
`@summary` use `List2Docs` if you want to exclude design documents

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
| include_docs | `Boolean` || `false` | Include the content of the documents |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentListResponse<any>` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`List2Docs`* 
---
```jsx
  List2Docs(dbName) => Promise<{
    Success: Boolean,
    payload: [any]
  }>
```

### **Usage**
List all the documents in the database excluding design documents

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[any]` ||| The list of documents in the database |

<br/>

## <span style="color: #569CD6">async</span> *`Find`* 
---
```jsx
  Find(dbName, selector = {}, skip = 0, limit = Number.MAX_SAFE_INTEGER, fields = [], sort = []) => Promise<{
    Success: Boolean,
    payload: nano.MangoResponse<any>
  }>
```

### **Usage**
Find documents in the database with given criteria

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of the database |
| selector | `Object` || `{}` | The selector object |
| skip | `Number` || `0` | Number of documents skipped |
| limit | `Number` || `Number.MAX_SAFE_INTEGER` | Max Number of documents |
| fields | `[String]` || `[]` | extract fields, all if empty |
| sort | `Object` || `[]` | sort model | 
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.MangoResponse<any>` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`FindAndDelete`* 
---
```jsx
  FindAndDelete(dbName, selector = {}) => Promise<{
    Success: Boolean,
    payload: nano.DocumentBulkResponse[]
  }>
```

### **Usage**
Find and delete docs

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| selector | `Object` || `{}` | The selector object |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`Insert`* 
---
```jsx
  Insert(dbName, doc) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Insert document into database

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| doc | `any` | ✔ || The document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`InsertBulk`* 
---
```jsx
  InsertBulk(dbName, docs = []) => Promise<{
    Success: Boolean,
    payload: [nano.DocumentBulkResponse]
  }>
```

### **Usage**
Insert multiples documents
Automatically split documents if it exceeds the file transfer limit
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| docs | `[any]` || `[]` | The documents to be inserted |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`Update`* 
---
```jsx
  Update(dbName, doc, insert = true) => Promise<{
    Success: boolean;
    payload: nano.DocumentInsertResponse;
  }>
```

### **Usage**
Update the document.
Block or replace if the document exists
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| doc | `any` | ✔ || The document to be inserted |
| insert | `Boolean` || `true` | If true, the document will be replaced |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`UpdateBulk`* 
---
```jsx
  UpdateBulk(dbName, docs = [], insert = true, blockProcessIfNotExist = false) => Promise<{
    Success: Boolean,
    payload: [nano.DocumentBulkResponse]
  }>
```

### **Usage**
Update multiple documents
Block or replace if the document exists
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| docs | `[any]` ||| The documents to be updated |
| insert | `Boolean` || `true` | If true, the document will be replaced |
| blockProcessIfNotExist | `Boolean` || `false` | If true, the process will be terminated if the document ID does not exist |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`Delete`* 
---
```jsx
  Delete(dbName, id, rev = null) => Promise<{
    Success: Boolean,
    payload: [nano.DocumentBulkResponse]
  }>
```

### **Usage**
mark the document as _deleted: true

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| id | `String` | ✔ || The id of the document |
| rev | `String` || `null` | The rev field of the doc, if null, it will get from the database automatically |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`DeleteBulk`* 
---
```jsx
  DeleteBulk(dbName, docs = []) => Promise<{
    Success: Boolean,
    payload: [nano.DocumentBulkResponse]
  }>
```

### **Usage**
mark the documents as _deleted: true

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| docs | `[any]` || `[]` | The documents to be deleted with id and rev |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`DeleteAll`* 
---
```jsx
  DeleteAll(dbName) => Promise<{
    Success: Boolean,
    payload: [nano.DocumentBulkResponse]
  }>
```

### **Usage**
List and mark all the documents in dbName as _deleted: true

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `[nano.DocumentBulkResponse]` ||| The response from nano |
<br/>

## <span style="color: #569CD6">async</span> *`View`* 
---
```jsx
  View(dbName, designName, viewName, params = null) => Promise<{
    Success: Boolean,
    payload: nano.DocumentViewResponse<V, any>
  }>
```

### **Usage**
`@notes` BETA
Return the view of the database
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| designName | `String` | ✔ || The name of the design doc |
| viewName | `String` | ✔ || The name of the target view |
| params | `nano.DocumentViewParams` || `null` ||
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentViewResponse<V, any>` ||||
<br/>

## <span style="color: #569CD6">async</span> *`getDocQ`* 
---
```jsx
  getDocQ(dbName, id, debug = true) => Promise<{
    Success: Boolean,
    payload: any
  }>
```

### **Usage**
Queue and get the document

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The name of database |
| id | `String` | ✔ || The id of the document |
| debug | `Boolean` || `true` | Show message if cannot get the doc |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `any` ||| The whole document |
<br/>

## <span style="color: #569CD6">async</span> *`Backup`* 
---
```jsx
  Backup() => Promise<{
    Success: Boolean,
    payload: String
  }>
```

### **Usage**
Automatically backup the current version of CouchDB to `(this.backupDir + this.env + '/CouchDB')`

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `String` ||| Empty if no error |
<br/>

## <span style="color: #569CD6">async</span> *`Restore`* 
---
```jsx
  Restore(srcEnv, datetime) => Promise<{
    Success: Boolean,
    payload: String
  }>
```

### **Usage**
Restore specified version (datetime) to specified environment

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| srcEnv | `String` | ✔ || The source environment, the method will find corresponding zip under the source env folder |
| datetime | `String` | ✔ || The version of the backup to be restored |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `String` ||| Empty if no error |
<br/>

