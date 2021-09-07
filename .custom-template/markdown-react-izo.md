[Back](../README.md)
# **${1} v0.1.0**
A generic react-class written for ${2}.

<br/>

## **Usage**
---

```jsx
class Test extends Component {

  render(){
    return (
      <${1}
        schema={schema}
        />
    );
  }
}
```
<br/>

### **Accessing class functions : onMount**
---
Hooking onMount function can allow parent component to access functions of `${1}` component.
``` jsx
//mount it
onMount${1} = (callbacks) => {
  this.Mount${1} = callbacks;
}

//trigger the function
componentDidMount(){
  this.Mount${1}.Submit();
}

//link the onMounted function to the component
render(){
  return (
    <${1}
      onMounted={this.onMount${1}}
      />
  );
}
```
<br/>

### *Accessible Functions*
| Function | Parameters | Description |
| :--- | :--- | :--- |

<br/>

## **Necessary Props**
---
<br/>

The following is the necessary props that must be passed into `${1}` in order to let it works. 

| Props  | Type   | Description | Link |
| :---   | :---- | :---       | :--- |

<br/>

## **Optional Props**
---
<br/>

### ***functions***
Listener functions triggered when the form reacts.

| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| onMounted | `function` || `null` | mount the parent pointer |

<br/>

### ***controls***

| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|

<br/>

### ***styles***
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|

<br/>

### ***grid specific***
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|

<br/>

### ***input specific***
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|

<br/>
