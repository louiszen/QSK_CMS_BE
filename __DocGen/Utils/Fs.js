const fs = require("fs");
const mkdir = require("make-dir");
const rimraf = require("rimraf");

const { promisify } = require("util");

/**
 * Promisify fs module
 */
module.exports = {
  appendFile: promisify(fs.appendFile),
  writeFile: promisify(fs.writeFile),
  readFile: promisify(fs.readFile),
  access: promisify(fs.access),
  unlink: promisify(fs.unlink),
  stat: promisify(fs.stat),
  readdir: promisify(fs.readdir),
  constants: fs.constants,
  createWriteStream: fs.createWriteStream,
  createReadStream: fs.createReadStream,
  mkdir: mkdir,
  rmdir: promisify(rimraf),
};