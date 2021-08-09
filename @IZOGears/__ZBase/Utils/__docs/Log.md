# **Log**
Managed Log

## ***Dependencies***
`moment`, `Fs`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Write`* 
---
```jsx
  Write(content, suffix = "", path = _config.Log.Path) => Promise<void>
```

### **Usage**
Write Log to file

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| content | `String` | ✔ || The log content |
| suffix | `String` || `""` | The filename suffix |
| path | `String` || `_config.Log.Path` | The destination of the file |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`WriteError`* 
---
```jsx
  WriteError(content, e, suffix = "-error", path = _config.Log.Path, maxShow = 5000)
```

### **Usage**
Write Error Log to file

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| content | `String` | ✔ || The log content |
| e | `Error` | ✔ || The error object |
| suffix | `String` || `""` | The filename suffix |
| path | `String` || `_config.Log.Path` | The destination of the file |
| maxShow | `Number` || `5000` | The max characters of error to be logged |
<br/>
