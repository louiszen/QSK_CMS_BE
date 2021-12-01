# Coding Instruction - Quick Starter Kit (**NodeJS** Backend) **IZOGears Base**

## **API Settings**

### **Express Dynamic Routing**
> See [app.js](./IZOGears/app.js)

`app.js` serves as the app entry point. <br/>
It holds an dynamic routing `/:cat/:subcat/:action` instead of legacy separated route. <br/>
The API funcs are linked up through [__SYSDefault/APIConfig/cores.js](./__SYSDefault/APIConfig/cores.js)

Normally, the `core` is a 3-layer `JSObject` <br/>
that coresponding to the location params in the dynamic route `cat`, `subcat`, `action`. <br/>
In the other words, we can find the `/CommonAPI/Env/Init` under `cores.CommonAPI.Env.Init`, <br/>
 i.e., `cat = "CommonAPI"`, `subcat = "Env"`, `action = "Init"`
