# **Response**
Return standard response to client end

## ***Functions***
## <span style="color: #569CD6">static</span> *`Send`* 
---
```jsx
  Send(success, payload, message) => {
    Success: Boolean,
    payload: any,
    message: String
  }
```

### **Usage**
Return standard response to client end

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| success | `Boolean` | ✔ || Whether the API call is Successful |
| payload | `any` || `{}` | payload to be sent to client |
| message | `String` || `""` | plain text message to be sent to client |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Whether the API call is Successful |
| payload | `any` ||| payload to be sent to client |
| message | `String` ||| plain text message to be sent to client |
<br/>

## <span style="color: #569CD6">static</span> *`SendError`* 
---
```jsx
  SendError(errorCode, error) => {
    Success: Boolean,
    payload: any,
    errorCode: Number,
    message: String
  }
```

### **Usage**
Send Standard Error Message to client

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| errorCode | `Number` | ✔ || The error code to be sent |
| error | `Error` | ✔ || The error object |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Whether the API call is Successful |
| payload | `any` ||| payload to be sent to client |
| errorCode | `Number` ||| The error code to be sent |
| message | `String` ||| plain text message to be sent to client |
<br/>