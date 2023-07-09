const htmlParser = require('htmlparser2');
const sfcCompiler = require('@vue/compiler-sfc');
module.exports = function ttmlLoader(code) {
  const result = sfcCompiler.compileTemplate({
    id: Math.random() + '',
    source: code,
    filename: this.resourcePath,
  });
  return result.code;
};
