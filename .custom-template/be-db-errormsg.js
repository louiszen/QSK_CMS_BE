let msg = ${1};
console.error(Chalk.CLog("[x]", msg, [cat, subcat, action]));
return Response.SendError(9001, msg);