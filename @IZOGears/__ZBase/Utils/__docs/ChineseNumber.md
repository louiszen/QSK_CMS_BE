# **ChineseNumber**
Convert chinese number to numeric data

## ***Dependencies***
`lodash`

<br/>

## ***Functions***
## *`constructor`* 
---
```jsx
  constructor(str, time = false) => ChineseNumber
```

### **Usage**
Create a ChineseNumber instance

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| str | `String` | ✔ || The input string |
| time | `Boolean` || `false` | The number is time-based |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `ChineseNumber` ||| new ChineseNumber instance |
<br/>

## *`toNumber`* 
---
```jsx
  toNumber(str = this.Modified) => Number
```

### **Usage**
Parse the string to number

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| str | `String` || `this.Modified` | The string input |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| Number ||| The parsed number |
<br/>

## *`toArabicStr`* 
---
```jsx
  toArabicStr(minNum = 2, str = this.Modified) => String
```

### **Usage**
Parse the string to Arabic String

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| minNum | `Number` || `2` | The minimum number of characters |
| str | `String` || `this.Modified` | The string input |

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| Arabic String |
<br/>

