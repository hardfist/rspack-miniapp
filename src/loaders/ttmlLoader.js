const htmlParser = require('htmlparser2');
module.exports = function ttmlLoader(code) {
  const parser = new htmlParser.Parser();
  const result = parser.write(code);
  parser.end();
  return `// ${this.resource} place holder`;
};
