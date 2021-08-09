# **Path**
Path Utils

## ***Dependencies***
`path`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> *`Base`* 
---
```jsx
  Base(_path, _ext) => String
```

### **Usage**
Return the basename

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| _path | `String` | ✔ || The full path |
| _ext | `String` | ✔ || The extension of the file |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The basename of the file |

<br/>

## <span style="color: #569CD6">static</span> *`Dir`* 
---
```jsx
  Dir(_path) => String
```

### **Usage**
Return the folder name of the file which is in

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| _path | `String` | ✔ || The full path |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The nearest folder of the file |
<br/>

## <span style="color: #569CD6">static</span> *`Ext`* 
---
```jsx
  Ext(_path) => String
```

### **Usage**
Return the extension of the file

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| _path | `String` | ✔ || The full path |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The extension of the file |
<br/>

## <span style="color: #569CD6">static</span> *`Normalize`* 
---
```jsx
  Normalize(_path) => String
```

### **Usage**
Return the normalized path

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| _path | `String` | ✔ || The full path |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The normalized path of the file |
<br/>

## <span style="color: #569CD6">static</span> *`Join`* 
---
```jsx
  Join(..._paths) => String
```

### **Usage**
Join the paths

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| _paths | `[String]` | ✔ || Paths to be joined |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The joined path |
<br/>

