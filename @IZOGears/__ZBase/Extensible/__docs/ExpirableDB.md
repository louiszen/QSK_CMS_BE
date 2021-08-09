# **ExpirableDB**
Handle DB storage that will be expired and house-keeped after a certain period.

## ***Dependencies***
`Renewable`, `Time`, `DDGen`, `CouchDB`, `lodash`, `moment`
<br/>

## ***Functions***

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Renew`* 
---
```jsx
  Renew() => Promise<{
    Success: Boolean
  }>
```

### **Usage**
Operations will be executed if the instance is need to renew.

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicate whether the operation is successful |

<br/>

## <span style="color: #569CD6">static</span> *`needRenew`* 
---
```jsx
  needRenew(now) => Boolean
```

### **Usage**
The condition for renew.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| now | `moment.Moment` | ✔ || The moment object of now |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| Indicate whether the instance has to be renewed |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Init`* 
---
```jsx
  Init({db, DBName, keep = 120, mode = "M"}) => Promise<{
    Success: Boolean
  }>
```

### **Usage**
Call `OnLoad` once before using it
`@note` Do NOT directly call this method

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| db | `CouchDB` | ✔ || The CouchDB instance for accessing the database |
| DBName | `String` | ✔ || The target database name prefix |
| keep | `Number` || `120` | The value of the keeping period |
| mode | <code> "M" &#124; "D" </code> || `"M"` | The database will be separated on months or days |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicate whether the operation is successful | 

<br/>

## <span style="color: #569CD6">static</span> *`CurrentDBName`* 
---
```jsx
  CurrentDBName() => String
```

### **Usage**
Get the current database name in use.

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The current database name |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`CreateDB`* 
---
```jsx
  CreateDB(dbName) => Promise<{
    Success: Boolean,
    payload: any
  }>
```

### **Usage**
Create a new DB if it does not exists

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The database name to be created |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DatabaseCreateResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`AddDesignDoc`* 
---
```jsx
  AddDesignDoc(dbName) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Adding design document for field `inTime` sorting into database

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| dbName | `String` | ✔ || The database name that targeted to insert design document |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicate whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Insert`* 
---
```jsx
  Insert(doc) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Insert document into the database.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| doc | `any` | ✔ || The document to be inserted |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicate whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span>  *`Doc`* 
---
```jsx
  Doc(ID) => Promise<any>
```

### **Usage**
Get the document of specified ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| <code> any &#124; undefined </code> ||| The document or `undefined` if not found |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`CheckClear`* 
---
```jsx
  CheckClear() => Promise<void>
```

### **Usage**
Check whether the existing databases expired and can be deleted, then delete it

<br/>





