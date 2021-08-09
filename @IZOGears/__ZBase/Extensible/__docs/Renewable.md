# **Renewable**
Building block for instances that need to be updated periodically over a certain time.

## ***Dependencies***
`Initializable`, `Time`, `lodash`

<br/>

## ***Functions***

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span>   *`Update`* 
---
```jsx
  Update() => Promise<void>
```

### **Usage**
Check whether the module need to be updated
`@readonly` Do NOT change or override.

<br/>

## <span style="color: #569CD6">static</span> *`IsExpired`* 
---
```jsx
  IsExpired(now, time, unit = "minute") => Boolean
```

### **Usage**
condition of expiry
`@readonly` Do not change or override.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| now | `moment.Moment` | ✔ || The moment object of now |
| time | `Number` | ✔ || The value of expiry |
| unit | `String` || `"minute"` | The unit of the time | 

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| If true, the last update time is expired |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Renew`* 
---
```jsx
  Renew() => Promise<{
    Success: Boolean
  }>
```

### **Usage**
Renew MAIN process
`@note` For OVERRIDE, override this method to fit your use
`@note` Do Not directly call this method

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the operation is successful |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`needRenew`* 
---
```jsx
  needRenew(now) => Promise<Boolean>
```

### **Usage**
Condition of update
`@note` For OVERRIDE, override this method to fit your use

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| now | `moment.Moment` | ✔ || The moment object of now |
<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| Indicates whether the instance need update |

<br/>




