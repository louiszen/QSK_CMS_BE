const _base = require('../../@IZOGears/__ZBase');
const _config = require('../../_config');
const _remote = require('../../remoteConfig');

const _ = require('lodash');
const JWT = require('jwt-simple');
const { Accessor } = require('../../@IZOGears/__ZBase/Utils');
const {jwtTokenSecret, jwtExpire} = _config;
const OAuth = require('../../__SYSDefault/OAuth');

class Authorize extends _base.BaseClass{

  /**
   * 
   * @param {String} jwt 
   * @returns 
   */
  static IsExpired(jwt){
    let _JWT = this.Decode(jwt);
    return Date.now() >= _JWT.expires;
  }

  /**
   * 
   * @param {String} jwt 
   * @returns 
   */
  static Decode(jwt){
    return JWT.decode(jwt, jwtTokenSecret);
  }

  static Encode(username, password, user){
    return JWT.encode({ 
      username: username, 
      password: password,
      expires: Date.now() + jwtExpire,
      version: user.Version,
      level: user.Level
    }, jwtTokenSecret);
  }

  /**
   * 
   * @param {String} jwt 
   */
  static async GetUserFromJWT(jwt){
    let _JWT = this.Decode(jwt);
    let user = await this.GetUser(_JWT.username, _JWT.password);
    return user;
  }

  /**
   * Get the user ceredentials from remote database
   */
  static async GetRemoteUsers(){
    if(!this.remoteUsers || this.dirty){
      try {
        this.remoteUsers = await _remote.GetUsers();
        this.dirty = false;
      }catch(e){
        console.error(this.CLog("Cannot get remote Users.", "[x]"));
        this.remoteUsers = [];
        this.dirty = true;
      }
    }
  }

  /**
   * Refresh stored remote user ceredentials
   */
  static async RefreshRemoteUsers(){
    delete this.remoteUsers;
  }

  /**
   * Extract Access Level from JWT
   * @param {String} jwt 
   */
  static UserLevel(jwt){
    try{
      let _JWT = this.Decode(jwt);
      return _JWT.level;
    }catch(e){
      return Number.MAX_SAFE_INTEGER;
    }
  }

  /**
   * Extract Authority Tree from JWT
   * @param {String} jwt 
   */
  static async UserAuthority(jwt){
    try{
      let user = await this.GetUserFromJWT(jwt);
      return user.authority;
    }catch(e){
      return null;
    }
  }

  /**
   * Check the authority tree
   * @param {[*]} authority 
   * @param {String} reqAuth 
   * @returns 
   */
  static AuthCheck = (authority, reqAuth) => {
    if(_.isEmpty(reqAuth) || Accessor.Get(authority, reqAuth) !== undefined){
      return true;
    }
    return false;
  }

  /**
   * Check the level of accessibility
   * @param {Number} level 
   * @param {Number} reqLevel 
   * @returns 
   */
  static LevelCheck = (level, reqLevel) => {
    return level <= reqLevel;
  }

  /**
   * Check the inner accessibility
   * @param {[*]} authority 
   * @param {String} reqAuth 
   * @param {String} reqFunc 
   * @returns 
   */
  static FuncCheck = (authority, reqAuth, reqFunc) => {
    if(_.isEmpty(reqAuth) || _.isEmpty(reqFunc)) return true;
    let func = Accessor.Get(authority, reqAuth);
    if(!func || !_.isArray(func)) return false;
    if(func.includes("*") || func.includes(reqFunc)) return true;
    return false;
  }

  /**
   * Check if the user is permitted
   * @param {String} jwt 
   * @param {Number} reqLevel 
   * @param {String} reqAuth 
   * @param {String} reqFunc
   */
  static async IsAccessible(jwt, reqAuth = "", reqLevel = 0, reqFunc = ""){
    try{
      let authority = await this.UserAuthority(jwt);
      let level = this.UserLevel(jwt);

      return this.AuthCheck(authority, reqAuth) 
        && this.LevelCheck(level, reqLevel) 
        && this.FuncCheck(authority, reqAuth, reqFunc);

    }catch(e){
      return false;
    }
  }

  static async HasUser(username){

    await this.GetRemoteUsers();

    const users = [
      _config.RootUser,
      OAuth.RootUser,
      ...this.remoteUsers
    ];

    for(let i=0; i<users.length; i++){
      if(username === users[i].username){
        return {
          hasUser: true,
          UserDisplayName: users[i].UserDisplayName
        }
      }
    }

    return {
      hasUser: false
    }
  }

  /**
   * 
   * @param {String} username 
   * @param {String} password 
   * @returns 
   */
  static async GetUser(username, password){

    await this.GetRemoteUsers();

    const users = [
      _config.RootUser,
      OAuth.RootUser,
      ...this.remoteUsers
    ];

    for(let i=0; i<users.length; i++){
      if(username == users[i].username && password == users[i].password){
        return users[i];
      }
    }

    return null;
  }
  
  /**
   * 
   * @param {String} username 
   * @param {String} password 
   */
  static async Login(username, password){
    try{
      let user = await this.GetUser(username, password);
      if(user){
        return {
          logged: true,
          JWT: this.Encode(username, password, user),
          authority: user.authority,
          UserDisplayName: user.UserDisplayName,
          Version: user.Version,
          level: user.Level
        };
      }else{
        return {
          logged: false
        }
      }
    }catch(e){
      return {
        logged: false
      }
    }
  }

}

module.exports = Authorize;