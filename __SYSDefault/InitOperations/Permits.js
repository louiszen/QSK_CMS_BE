const _remote = require("../../remoteConfig");
const _DBMAP = require("../_DBMAP");
const _initDocs = require("../InitDocs");

module.exports = async () => {

  let DB = await _remote.BaseDB();

  await DB.DestroyDrawer(_DBMAP.Permits);
  await DB.CreateDrawer(_DBMAP.Permits);
    
  await DB.InsertMany(_DBMAP.Permits, _initDocs.DBDocs.Permits);

  return {Success: true};

};