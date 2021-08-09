# **RemoteStorage**

Extension for ExpirableDB with ID-field data structure

## ***Dependencies***
`ExpirableDB`, `lodash`
<br/>

## ***Functions***

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Get`* 
---
```jsx
  Get(ID, field) => Promise<any>
```

### **Usage**
Get the field value of remote doc

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The field name of the document |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The return value |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Set`* 
---
```jsx
  Set(ID, field, value, override = true, timer = -1) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Set the field value of the remote doc

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The field name of the document |
| override | `Boolean` || `true` | Override if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`SetBulk`* 
---
```jsx
  SetBulk(ID, data) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Set multiple fields of the remote doc

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| data | `[Field]` | ✔ || The fields |

`Field Object`
```jsx
{
  field: String, 
  value: any, 
  override?: Boolean,
  timer?: Number
}
```
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| field | `String` | ✔ || Field name |
| value | `any` | ✔ || The value of the field |
| override | `Boolean` || `true` | Override if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`GetAll`* 
---
```jsx
  GetAll(ID) => Promise<any>
```

### **Usage**
Get all the fields

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| Document with all fields | 
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`GetPrefix`* 
---
```jsx
  GetPrefix(ID, prefix) => Promise<any>
```

### **Usage**
Get all the fields with specified prefix

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| prefix | `String` | ✔ || The prefix of the field wanted |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| Document with fields with specified prefix | 
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`SetAll`* 
---
```jsx
  SetAll(ID, payload, override = true, timer = -1) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**


<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| payload | `[{[field] : value}]` | ✔ || The value pairs of the document |
| override | `Boolean` || `true` | Override if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`SetPrefix`* 
---
```jsx
  SetPrefix(ID, payload, prefix, without = false, override = true, timer = -1) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Set all the field with or without specified prefix

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| payload | `[{[field] : value}]` | ✔ || The value pairs of the document |
| prefix | `String` | ✔ || The prefix of the field wanted |
| without | `Boolean` || `false` | Reverse the selected case |
| override | `Boolean` || `true` | Override if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Remove`* 
---
```jsx
  Remove(ID, field) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Remove certain field

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The field name of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`RemovePrefix`* 
---
```jsx
  RemovePrefix(ID, prefix) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Remove fields with prefix

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| prefix | `String` | ✔ || The prefix of the field wanted |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`RemoveAll`* 
---
```jsx
  RemoveAll(ID, except = []) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Remove all except specified field

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| except | `[String]` || `[]` | Except |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Clear`* 
---
```jsx
  Clear(ID) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Clear the ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`List`* 
---
```jsx
  List(ID) => Promise<String[]>
```

### **Usage**
List the fields under ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `[String]` ||| The list of fields |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Detail`* 
---
```jsx
  Detail(ID) => Promise<any>
```

### **Usage**
Return the data under ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The data object under ID |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Pass`* 
---
```jsx
  Pass(ID, step = 1) => Promise<{
    Success: Boolean,
    payload: nano.DocumentInsertResponse
  }>
```

### **Usage**
Decrease the timer by steps and delete when reaches 0

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| step | `Number` || `1` | Number of steps decreased, delete when reaches 0 |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `nano.DocumentInsertResponse` ||| The response from CouchDB |
<br/>



