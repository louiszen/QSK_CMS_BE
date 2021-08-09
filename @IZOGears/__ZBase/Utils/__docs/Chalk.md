# **Chalk**
Colorful console log

## ***Dependencies***
`lodash`, `Time`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> *`Guide`* 
---
```jsx
  Guide(out = console.log) => void
```

### **Usage**
Output the legacy guide

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| out | `Function` || `console.log` | The redirect output channel |
<br/>

## <span style="color: #569CD6">static</span> *`Break`* 
---
```jsx
  Break(color = "Gray", out = console.log) => void
```

### **Usage**
Print a colored break line

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| color | `String` || `"Gray"` | Color of the line |
| out | `Function` || `console.log` | The redirect output channel |
<br/>

## <span style="color: #569CD6">static</span> *`Title`* 
---
```jsx
  Title(msg, color = ["BrightCyan", "Bold"], bracketColor = "Green", out = console.log) => void
```

### **Usage**
Print a color-blocked title

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| msg | `String` | ✔ | The title text |
| color | `[String]` || `["BrightCyan", "Bold"]` | The color of the title text |
| bracketColor | `String` || `"Green"` | The color of the bracket |
| out | `Function` || `console.log` | The redirect output channel |
<br/>

## <span style="color: #569CD6">static</span> *`Error`* 
---
```jsx
  Error(msg) => String
```

### **Usage**
Return colored string with default error color

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| msg | `String` | ✔ || The error message | 
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| String embedded with colored code |

<br/>

## <span style="color: #569CD6">static</span> *`Log`* 
---
```jsx
  Log(msg, colorDefault = [], showTimeStamp = true) => String
```

### **Usage**
Return String embedded with colored code and modified with timestamp and predefined rules

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| msg | `String` | ✔ || The main message |
| colorDefault | `[String]` || `[]` | The color of the message |
| showTimeStamp | `Boolean` || `true` | Show the time stamp logged |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| String embedded with colored code | 
<br/>

## <span style="color: #569CD6">static</span> *`CLog`* 
---
```jsx
  CLog(icon, msg, action) => String
```

### **Usage**
Managed log for API use
e.g.
> May 06-16:23:56 [Env/IsInitialized] Check project for [local]
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| icon | `String` | ✔ || The icon show in the left hand side |
| msg | `String` | ✔ || The main message shown |
| action | <code>String &#124; [String] </code> | ✔ || The action subaction level of the API |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| String embedded with colored code | 
<br/>

