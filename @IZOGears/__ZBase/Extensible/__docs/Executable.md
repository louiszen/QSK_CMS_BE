# **Executable**
Building blocks for executable classes.
## ***Dependencies***
`Renewable`, `Time`
<br/>

## ***Functions***

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Exec`* 
---
```jsx
  Exec(params) => 
  Promise<{
    Success: Boolean,
    payload: *
  }>
```

### **Usage**
`@readonly` Do NOT change or override.
call Exec when you want to execute the `Main`
```jsx
 let res = await YourClass.Exec({val1: 1, val2: 2});
```

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| params | `any` ||| The params passing to the `Main` |
<br/>

### **Returns**

See `Main` below.

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Main`* 
---
```jsx
  Main(params) => 
  Promise<{
    Success: Boolean,
    payload: *
  }>
```

### **Usage**
Override this function to fit your usage
`@note` Do NOT directly call this method
`@note` For OVERRIDE, override this method to fit your use
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| params | `any` ||| Any parameters |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicates whether the execution is successful. |
| payload | `any` ||| Anything return by the procedure |

<br/>

