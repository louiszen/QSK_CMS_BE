# **Initializable**
Building block for instance which need to be initialized before use.

## ***Dependencies***
`Time`, `BaseClass`, `lodash`
<br/>

## ***Functions***

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Init`* 
---
```jsx
  Init(params) => Promise<{
    Success: Boolean
  }>
```

### **Usage**
Operation that initialize the instance.
Initialization Scripts
as long as return {Success: boolean}
`@note` Do NOT directly call this method.
`@note` For OVERRIDE, override this method to fit your use

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| params | `any` ||| The parameters that needed for initialization |

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| Success | `Boolean` ||| Indicate whether the operation is successful |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`ReInit`* 
---
```jsx
  ReInit() => Promise<Boolean>
```

### **Usage**
ReInit scripts, call before execution of other core functions
`@readonly` Do NOT change or override.

<br/>

### **Returns**

| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| The state whether the instance is initialized |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`OnLoad`* 
---
```jsx
  OnLoad(params) => Promise<void>
```

### **Usage**
OnLoad scripts, call it once on starts up
`@readonly` Do NOT change or override.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| params | `any` ||| The parameters that needed for initialization |

<br/>

