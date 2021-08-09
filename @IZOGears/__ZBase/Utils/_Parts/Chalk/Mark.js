
/**
 * [!] Special notation for debug message
 */
const Regex = /\[([^\n]?)\]/g;
const Map = {
  '-': ["Gray"],
  'o': ["BrightGreen"],
  'x': ["BrightRed"],
  '!': ["BrightYellow"],
  '>': ["BrightBlue"],
  '<': ["Cyan"],
  'v': ["BrightMagenta"],
  '*': ["Brightwhite"]
}
const DefaultColor = ["BrightCyan", "Bold"];
const DefaultBracketColor = ["Gray"];

module.exports = {
  Regex,
  Map,
  DefaultColor,
  DefaultBracketColor
};