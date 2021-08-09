# **Task**
Manage Queuable Tasks
## ***Dependencies***

<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> *`Wait`* 
---
```jsx
  Wait(interval) => Promise<any>
```

### **Usage**
Promise method of wait

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| interval | <code> Number &#124; String </code> | ✔ || Duration of the wait |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Promise<any>` ||| Promise return |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`CallAndWait`* 
---
```jsx
  CallAndWait(method, interval) => Promise<any>
```

### **Usage**
Call method and wait for a period

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| method | `Promise` | ✔ || The method to be called |
| interval | <code> Number &#124; String </code> | ✔ || Duration of the wait |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| result of the promise |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`CallOrWait`* 
---
```jsx
  CallOrWait(method, interval) => Promise<any>
```

### **Usage**
Call or wait for method to run

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| method | `Promise` | ✔ || The method to be called |
| interval | <code> Number &#124; String </code> | ✔ || Duration of the wait |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| result of the promise |
<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Retry`* 
---
```jsx
  Retry(method, times = 5, interval = 1000) => Promise<any>
```

### **Usage**
Retry Promise for n times at specified interval

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| method | `Promise` | ✔ || The method to be called |
| times | `Number` || `5` | The number of times that retry |
| interval | `Number` || `1000` | Duration of the wait |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| result of the promise |
<br/>
