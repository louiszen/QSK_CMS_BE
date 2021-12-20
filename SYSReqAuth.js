/**
 * Code Generated for 3-Layer-API Authority Settings
 * reqAuth - Node exists in Authority Tree
 * reqFunc - Func String exists in Authority Tree Node Value
 * reqLevel - Level of assessment
 * reqGroup - Group assessment
 * reqRole - Role assessment
 * @typedef {{
 *    reqAuth: String, 
 *    reqFunc: String,
 *    reqLevel: Number,
 *    reqGroup: String,
 *    reqRole: String
 * }} auth
 * @type {Object.<string, Object.<string, Object.<string, auth>>}
 */const SYSReqAuth = {
  CommonAPI: {
    Auth: {
      SignIn: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      CheckUserName: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      MSALConfig: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      VerifyOTP: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    },
    Env: {
      Init: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      IsInitialized: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Info: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    },
    User: {
      List: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    },
    DBConfig: {
      Info: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Edit: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Include: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    },
    BnR: {
      Info: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Backup: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Restore: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      },
      Delete: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    },
    Restore: {
      RenewAuthority: {
        reqAuth: "",
        reqFunc: "",
        reqGroup: "",
        reqRole: ""
      }
    }
  },
  Config: {},
  Data: {},
  Tables: {},
  Internal: {}
};

module.exports = SYSReqAuth;