# **Excel**

## ***Dependencies***
`exceljs`, `lodash`

<br/>

## ***Functions***

## *`FitWorksheet`* 
---
```jsx
  FitWorksheet(worksheet) => void
```

### **Usage**
Fit the worksheet with appropriate cell width and height

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| worksheet | `ExcelJS.Worksheet` | ✔ || The input worksheet |

<br/>

## *`FontO`* 
---
```jsx
  FontO(color = "Default", name = "Arial", bold = true) => {
    name: String,
    bold: Boolean,
    color: {argb: String}
  }
```

### **Usage**
Get preset group of argb colors and output excelJS font object.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| color | `String` || `"Default"` | The accessor to the color group |
| name | `String` || `"Arial"` | The font family name |
| bold | `Boolean` || `true` | The font weight |

<br/>

### **Returns**

```jsx
{
  name: String,
  bold: Boolean,
  color: {
    argb: String
  }
}
```
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| name | `String` ||| The font family name |
| bold | `Boolean` ||| Whether the cell is bold |
| color.argb | `String` ||| The matched color |

<br/>

## *`FillO`* 
---
```jsx
  FillO(color = "Default") => {
    type: 'pattern',
    pattern: 'solid',
    fgColor: {
      argb: String
    }
  }
```

### **Usage**
Get the fill Object of corresponding color for excel JS

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| color | `String` || `"Default"` | The accessor to the color group |

<br/>

### **Returns**

```jsx
{
  type: 'pattern',
  pattern: 'solid',
  fgColor: {
    argb: String
  }
}
```
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
| type | `String` || `"pattern"` | Filling type |
| pattern | `String` || `"solid"` | Filling method |
| fgColor.argb | `String` ||| The color filled |

## *`ReadToRows`* 
---
```jsx
  ReadToRows(sheet, fileBuffer) => [any]
```

### **Usage**
Read excel values to array of rows.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| sheet | <code> Number &#124; String </code> | ✔ || The target sheetname |
| fileBuffer | `Buffer` | ✔ || The file buffer storage |

<br/>

### **Returns**

```jsx
  [any]
```

<br/>

## *`Excel2Docs`* 
---
```jsx
  Excel2Docs(fileBuffer, schema, sheetName = "Sheet1", noHeader = false) => [any]
```

### **Usage**
Translate Excel to array of JS Objects based on schema.

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| fileBuffer | `Buffer` | ✔ || The file buffer storage |
| schema | `[Schema]` | ✔ || The schema for excel |
| sheetName | `String` || `"Sheet1"` | The target sheetname |
| noHeader | `Boolean` || `false` | `true` if the excel does not contain a header row |

`Schema` Object
```jsx
{
  label?: String,
  name: String,
  format?: 'value' | 'key',
  array?: [any]
}
```
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| label | `String` ||| The label that shows in the header row |
| name | `String` | ✔ || The accessor of the field to the JS Object output |
| format | <code> "value" &#124; "key" </code> || `"value"` | For the **first** item under each array, it can be the object key if `format` is set to `"key"`, otherwise, numeric index is placed |
| array | `[Schema]` ||| Start an inner array or object under the name |
<br/>

### **Returns**

```jsx
  [any]
```

<br/>

## *`Docs2Excel`* 
---
```jsx
  Docs2Excel(data, schema, sheetName = "Sheet1", noHeader = false) => ExcelJS.Workbook
```

### **Usage**
Translate JS Object to Excel workbook based on schema

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| fileBuffer | `Buffer` | ✔ || The file buffer storage |
| schema | `[Schema]` | ✔ || The schema for excel |
| sheetName | `String` || `"Sheet1"` | The target sheetname |
| noHeader | `Boolean` || `false` | `true` if the excel does not contain a header row |

`Schema` Object
```jsx
{
  label?: String,
  name: String,
  format?: 'value' | 'key',
  array?: [any]
}
```
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| label | `String` ||| The label that shows in the header row |
| name | `String` | ✔ || The accessor of the field to the JS Object output |
| format | <code> "value" &#124; "key" </code> || `"value"` | For the **first** item under each array, it can be the object key if `format` is set to `"key"`, otherwise, numeric index is placed |
| array | `[Schema]` ||| Start an inner array or object under the name |
<br/>

### **Returns**

```jsx
  ExcelJS.Workbook
```

<br/>

