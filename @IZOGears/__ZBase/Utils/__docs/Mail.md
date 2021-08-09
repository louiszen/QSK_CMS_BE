# **Mail**
Mail Utils

## ***Dependencies***
`mailer`, `Chalk`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`sendAlertMail`* 
---
```jsx
  sendAlertMail(title, message, settings) => Promise<{
    Success: Boolean,
    payload: any
  }>
```

### **Usage**
Send alert mail to receivers

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| title | `String` | ✔ || The title of the email |
| message | `String` | ✔ || The content of the email |
| settings | `Object` | ✔ || The settings |
| settings.SENDER | `String` | ✔ || Sender email address |
| settings.RECEIVERS | <code>String &#124; [String] </code> | ✔ || The receivers email address |
| settings.PASSWORD | `String` | ✔ || The password for logging in the sender | 
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |
| payload | `any` ||| Empty if Success |
<br/>
