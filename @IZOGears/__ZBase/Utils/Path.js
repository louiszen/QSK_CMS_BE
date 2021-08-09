const path = require('path');

class Path {
  /**
   * Get the basename of the path
   * @param {String} _path 
   * @param {String} ext 
   */
  static Base(_path, _ext){
    return path.basename(_path, _ext);
  }

  /**
   * Get the directory
   * @param {String} _path 
   */
  static Dir(_path){
    return path.dirname(_path);
  }

  /**
   * Get the extension
   * @param {String} _path 
   */
  static Ext(_path){
    return path.extname(_path);
  }

  /**
   * Normalize the path
   * @param {String} _path 
   */
  static Normalize(_path){
    return path.normalize(_path);
  }

  /**
   * Join all the paths
   * @param  {...String} _paths 
   */
  static Join(..._paths){
    return path.join(_paths);
  }

}

module.exports = Path;