# **Time**
Time operation
## ***Dependencies***
`moment`, `axios`, `Chalk`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> *`Difference`* 
---
```jsx
  Difference(from, to, unit) => Number
```

### **Usage**
Return the difference of two timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| from | <code>moment.Moment &#124; String </code> | ✔ || Start timestamp |
| to | <code>moment.Moment &#124; String </code> | ✔ || End timestamp |
| unit | `String` | ✔ || Unit of time |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Number` ||| The difference of the two time |
<br/>

## <span style="color: #569CD6">static</span> *`Now`* 
---
```jsx
  Now() => moment.Moment
```

### **Usage**
Get the moment object of current timestamp

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`StartOfYear`* 
---
```jsx
  StartOfYear(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the start of year of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`EndOfYear`* 
---
```jsx
  EndOfYear(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the end of year of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`StartOfMonth`* 
---
```jsx
  StartOfMonth(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the start of month of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`EndOfMonth`* 
---
```jsx
  EndOfMonth(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the end of month of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`StartOfWeek`* 
---
```jsx
  StartOfWeek(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the start of week of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`EndOfWeek`* 
---
```jsx
  EndOfWeek(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the end of week of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`StartOfDay`* 
---
```jsx
  StartOfDay(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the start of day of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`EndOfDay`* 
---
```jsx
  EndOfDay(momentO = this.Now()) => moment.Moment
```

### **Usage**
Return the end of day of input timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` || `this.Now()` | time to be operated |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The return moment object |
<br/>

## <span style="color: #569CD6">static</span> *`IsBetween`* 
---
```jsx
  IsBetween(momentO, a, b, inclusivity = "[)", unit = null) => Boolean
```

### **Usage**
Check if the time is between certain time interval a, b

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` | ✔ || The time to be examined |
| a | `moment.Moment` | ✔ || Interval start |
| b | `moment.Moment` | ✔ || Interval end |
| inclusivity | <code> "[)" &#124; "[]" &#124; "(]" &#124; "()" </code> || `"[)"` | Inclusivity |
| unit | `String` || `null` | The unit of time that to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |

<br/>

## <span style="color: #569CD6">static</span> *`NowIsBefore`* 
---
```jsx
  NowIsBefore(compare) => Boolean
```

### **Usage**
Check if time now is before a timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | `moment.Moment` | ✔ || The time to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`NowIsAfter`* 
---
```jsx
  NowIsAfter(compare) => Boolean
```

### **Usage**
Check if time now is after a timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | `moment.Moment` | ✔ || The time to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`NowIsSameOrBefore`* 
---
```jsx
  NowIsSameOrBefore(compare) => Boolean
```

### **Usage**
Check if time now is same or before a timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | `moment.Moment` | ✔ || The time to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`NowIsSameOrAfter`* 
---
```jsx
  NowIsSameOrAfter(compare) => Boolean
```

### **Usage**
Check if time now is same or after a timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | `moment.Moment` | ✔ || The time to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`NowIsBetween`* 
---
```jsx
  NowIsBetween(compareA, compareB) => Boolean
```

### **Usage**
Check if time now is between a time interval

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compareA | `moment.Moment` | ✔ || Interval start |
| compareB | `moment.Moment` | ✔ || Interval end |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`NowIsSame`* 
---
```jsx
  NowIsSame(compare) => Boolean
```

### **Usage**
Check if time now is the same with the timestamp

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | `moment.Moment` | ✔ || The time to be compared |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if inside the time interval |
<br/>

## <span style="color: #569CD6">static</span> *`Moment`* 
---
```jsx
  Moment(timeStr) => moment.Moment
```

### **Usage**
Create moment object by time string

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| timeStr | <code>moment.Moment &#124; String </code> | ✔ || Time string |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `moment.Moment` ||| The moment object return |
<br/>

## <span style="color: #569CD6">static</span> *`Lapse`* 
---
```jsx
  Lapse(compare, unit = "seconds", precise = true) => Number
```

### **Usage**
Return lapsed time

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| compare | <code>moment.Moment &#124; String </code> | ✔ || Time to be compared |
| unit | `String` || `"seconds"` | Unit of time |
| precise | `Boolean` || `true` | precise compare |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Number` ||| The time lapsed |
<br/>

## <span style="color: #569CD6">static</span> *`Month`* 
---
```jsx
  Month(momentO = this.Now(), lang = "EN", full = false) => String
```

### **Usage**
Output locale month

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` | ✔ || The timestamp input |
| lang | `String` || `"EN"` | Language, support `"EN", "TC", "SC", "JP", "JPO", "KO"` |
| full | `Boolean` || `false` | Variant of language |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The return month string |

<br/>

## <span style="color: #569CD6">static</span> *`DayOfWeek`* 
---
```jsx
  DayOfWeek(momentO = this.Now(), lang = "EN", full = false) => String
```

### **Usage**
Output locale day of week

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` | ✔ || The timestamp input |
| lang | `String` || `"EN"` | Language, support `"EN", "TC", "SC", "JP", "KO"` |
| full | `Boolean` || `false` | Variant of language |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The return day of week string |
<br/>

## <span style="color: #569CD6">static</span> *`Time`* 
---
```jsx
  Time(momentO = this.Now()) => String
```

### **Usage**
Extract only time

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` | ✔ || The timestamp input |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The return time string |
<br/>

## <span style="color: #569CD6">static</span> *`Date`* 
---
```jsx
  Date(momentO = this.Now()) => String
```

### **Usage**
Extract only date

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| momentO | `moment.Moment` | ✔ || The timestamp input |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `String` ||| The return date string |
<br/>

## <span style="color: #569CD6">static</span> *`IsPublicHoliday`* 
---
```jsx
  IsPublicHoliday(phList, momentO = this.Now()) => Boolean
```

### **Usage**
Check if the time stamp is a public holiday based on the input public holiday list

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| phList | `[String]` | ✔ || List of public holiday | 
| momentO | `moment.Moment` | ✔ || The timestamp input |
<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `Boolean` ||| True if in public holiday list |

<br/>

## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`GetPublicHolidayList`* 
---
```jsx
  GetPublicHolidayList() => [String]
```

### **Usage**
Get the public holiday list from HK government

<br/>

### **Returns**
| Props | Type | Optional | Default | Description |
| :---|:---:|:---:|:---:|:---|
|| `[String]` ||| Return phList |
<br/>
