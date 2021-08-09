# **Storage**
Build block for local ID-field storage
## ***Dependencies***
`lodash`, `BaseClass`
<br/>

## ***Functions***
## *`Get`* 
---
```jsx
  Get(ID, field) => any
```

### **Usage**
Get the field value

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The value stored |
<br/>

## *`Set`* 
---
```jsx
  Set(ID, field, value, override = true, timer = -1) => void
```

### **Usage**
Set the field value

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
| value | `any` | ✔ || The value to be stored |
| override | `Boolean` || `true` | Override the stored value if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|

<br/>

## *`GetTimer`* 
---
```jsx
  GetTimer(ID, field) => Number
```

### **Usage**
Get only the time count

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Number` ||| The time count of the field |
<br/>

## *`SetTimer`* 
---
```jsx
  SetTimer(ID, field, timer = -1) => void
```

### **Usage**
Set only the time count

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |
<br/>

## *`SetValue`* 
---
```jsx
  SetValue(ID, field, value) => void
```

### **Usage**
Set only the value of the field

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
| value | `any` | ✔ || The value to be stored |
<br/>

## *`GetAll`* 
---
```jsx
  GetAll(ID) => [{[field]: value}]
```

### **Usage**
Get all the value pairs under the ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `[{[field]: value}]` ||| The value pairs |
<br/>

## *`GetPrefix`* 
---
```jsx
  GetPrefix(ID, prefix) => [{[field]: value}]
```

### **Usage**
Get values of specified prefix field

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| prefix | `String` | ✔ || The target prefix |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `[{[field]: value}]` ||| The value pairs |
<br/>

## *`SetAll`* 
---
```jsx
  SetAll(ID, payload, override = true, timer = -1) => void
```

### **Usage**
Set all values in the payload

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| payload | `[{[field] : value}]` | ✔ || The value pairs of the document |
| override | `Boolean` || `true` | Override if exists |
| timer | `Number` || `-1` | Last for n rounds, -1 is inifinity |
<br/>

## *`SetPrefix`* 
---
```jsx
  SetPrefix(ID, payload, prefix, without = false, override = true, timer = -1) => void
```

### **Usage**
Set all the values with prefix matched the field name

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

## *`Remove`* 
---
```jsx
  Remove(ID, field) => void
```

### **Usage**
Remove certain field

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| field | `String` | ✔ || The target field name |
<br/>

## *`RemovePrefix`* 
---
```jsx
  RemovePrefix(ID, prefix) => void
```

### **Usage**
Remove certain field with prefix

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| prefix | `String` | ✔ || The target prefix |
<br/>

## *`RemoveAll`* 
---
```jsx
  RemoveAll(ID, except) => void
```

### **Usage**
Remove all except specified

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
| except | `[String]` || `[]` | Except |
<br/>

## *`Clear`* 
---
```jsx
  Clear(ID) => void
```

### **Usage**
Clear all under ID

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

## *`List`* 
---
```jsx
  List(ID) => [String]
```

### **Usage**
List all the fields under ID;

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `[String]` ||| List of field name keys |
<br/>

## *`Detail`* 
---
```jsx
  Detail(ID) => any
```

### **Usage**
Return the detailed storage

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| ID | `String` | ✔ || The ID of the document |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The detailed storage under ID |
<br/>

## *`Pass`* 
---
```jsx
  Pass(ID, step = -1) => void
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







