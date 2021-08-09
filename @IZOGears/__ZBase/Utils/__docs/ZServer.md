# **ZServer**
Start a node server

## ***Dependencies***
`http`, `https`, `normalize-port`, `Fs`, `Chalk`, `Time`, `ZBaseVersion`
<br/>

## ***Functions***
## <span style="color: #569CD6">static</span> <span style="color: #569CD6">async</span> *`Start`* 
---
```jsx
  Start(serverConfig, app, showConsole = true) => Promise<void>
```

### **Usage**
Start a server

<br/>

### **Parameters**
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| serverConfig | `ServerConfig` | ✔ || The basic config of the server |
| app | `any` | ✔ || The starting component |
| showConsole | `Boolean` || `true` | show console.log |
<br/>

`ServerConfig`
| Props | Type | Required | Default | Description |
| :---|:---:|:---:|:---:|:---|
| port | `Number` || `process.env.SERVER_PORT` | The designated port |
| domain | `String` ||| The domain name |
| useHttps | `Boolean` || Use https server |
| https | `HttpsConfig` |||
| https.key | `String` || Path to the SSL Key |
| https.cert | `String` || Path to the SSL cert |
| https.intermediate | `String` || Path to the intermediate key |
| https.passphrase | `String` || PassPhrase |
