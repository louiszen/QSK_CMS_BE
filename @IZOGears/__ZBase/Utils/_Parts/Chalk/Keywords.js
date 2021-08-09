/**
 * Keywords that highlighted
 * ci stands for captialize insensitive
 */
const Keywords = [
  {keys: ["Success"], colors: ["BrightGreen", "Bold"]},
  {keys: ["Error"], colors: ["BrightRed", "Bold"]},
  {keys: ["Warning", "Caution"], colors: ["BrightYellow", "Bold"]},
  {keys: ["Finish", "Complete"], colors: ["BrightMagenta", "Bold"]},
  {keys: ["YES"], colors: ["BrightGreen"], ci: true},
  {keys: ["NO"], colors: ["BrightRed"], ci: true},
  {keys: ["DEV"], colors: ["Blue"], ci: true},
  {keys: ["UAT"], colors: ["Green"], ci: true},
  {keys: ["PREPRD"], colors: ["Magenta"], ci: true},
  {keys: ["PRD"], colors: ["Cyan"], ci: true},
  {keys: ["HOME"], colors: ["Yellow"], ci: true},
  {keys: ["LOCAL"], colors: ["BrightYellow"], ci: true},
  {keys: ["undefined"], colors: ["BrightBlue"]}
];

module.exports = Keywords;