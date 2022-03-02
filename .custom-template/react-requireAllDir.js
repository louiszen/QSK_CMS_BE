let requireComponent = require.context(
  "./",
  true,
  /.\/\w+\/$/
);

let list = {};

requireComponent.keys().forEach((fileName) => {

  let componentName = fileName
    .replace(/^\.\//, "")
    .replace(/\//, "");

  console.log(componentName);

  if(componentName === "index"){ 
    return;
  }
  
  let doc = require("./" + componentName).default;
  
  list[componentName] = doc;
});


export default list;