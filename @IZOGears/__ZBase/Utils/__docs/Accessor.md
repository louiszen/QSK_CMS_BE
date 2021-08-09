# **Accessor**
A tool that can easily build object and access object by accessor style locator ("field1.field2.{index}.field3", examples: "intents.0.intent.example")

## ***Dependencies***
`lodash`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> *`Get`* 
---
```jsx
  Get(obj, accessor, nullValue = "") => any
```

### **Usage**
Get the value via the input accessor
e.g.
```jsx
let obj = {
  field: {
    array: [
      "a",
      "b", 
      "c"
    ]
  }
};

let rtn = Accessor.Get(obj, "field.array.1");
console.log(rtn);
"b"

rtn = Accessor.Get(obj, "field.array");
console.log(rtn);
[
  "a",
  "b", 
  "c"
]
```
<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || The object to be accessed |
| accessor | `String` | ✔ || Accessor to the value |
| nullValue | `any` || `""` | Default null value if not found in any level |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The value |

<br/>

## <span style="color: #569CD6">static</span> *`Set`* 
---
```jsx
  Set(obj, accessor, value) => any
```

### **Usage**
Set the field of value in an object without modifying other in-level values and create new level if necessary.  Array would be created if the part of accessor is 0. 

```jsx
let obj = {
  field: {
    array1: ["a", "b", "c"]
  }
}

Accessor.Set(obj, "field.array2.0.text", "d");
console.log(obj)
{
  field: {
    array1: ["a", "b", "c"],
    array2: ["d"]
  }
}

Accessor.Set(obj, "field.array3.1.text", {
  hello: "world"
});
console.log(obj)
{
  field: {
    array1: ["a", "b", "c"],
    array2: ["d"],
    array3: {
      1: {
        hello: "world"
      }
    }
  }
}
```

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || The object to be accessed |
| accessor | `String` | ✔ || Accessor to the value |
| value | `any` | ✔ || The value to be placed |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The value |

<br/>

## <span style="color: #569CD6">static</span> *`Delete`* 
---
```jsx
  Delete(obj, accessor) => void
```

### **Usage**
Delete the field via accessor

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || The object to be accessed |
| accessor | `String` | ✔ || Accessor to the value |
<br/>

## <span style="color: #569CD6">static</span> *`IsIdentical`* 
---
```jsx
  IsIdentical(obj1, obj2, fields = null) => Boolean
```

### **Usage**
Compare two object field values to see if they are identical

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj1 | `any` | ✔ || The comparative 1 |
| obj2 | `any` | ✔ || The comparative 2 |
| fields | `[String]` || `null` | The list of accessors that to be compared, null for all |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if identical |
<br/>

## <span style="color: #569CD6">static</span> *`Exclude`* 
---
```jsx
  Exclude(obj, exclude) => any
```

### **Usage**
Exclude the fields

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || Original object |
| exclude | `[String]` || `null` | The list of accessors that to be excluded, null for all |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The filtered object |
<br/>

## <span style="color: #569CD6">static</span> *`Remain`* 
---
```jsx
  Remain(obj, include) => any
```

### **Usage**
Remian the fields

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || Original object |
| include | `[String]` || `null` | The list of accessors that to be included, null for all |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `any` ||| The filtered object |
<br/>

## <span style="color: #569CD6">static</span> *`isDeepEmpty`* 
---
```jsx
  isDeepEmpty(obj) => Boolean
```

### **Usage**
Check if the object is recursively empty

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| obj | `any` | ✔ || Object to be checked |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if it is true empty |
<br/>

