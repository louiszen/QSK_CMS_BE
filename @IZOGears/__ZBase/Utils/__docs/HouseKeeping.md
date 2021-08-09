# **HouseKeeping**
HouseKeeping functions for local folder

## ***Dependencies***
`moment`, `Fs`, `Time`, `Chalk`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Clean`* 
---
```jsx
  Clean(pathToDir, time, unit) => Promise<{
    Success: Boolean,
    payload: any
  }>
```

### **Usage**
Clean the folder if it is expired

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| pathToDir | `String` | ✔ || The path to the directory |
| time | `Number` | ✔ || The numeric value of time |
| unit | `String` | ✔ || The unit of the time |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `any` ||| null if Success |
<br/>
