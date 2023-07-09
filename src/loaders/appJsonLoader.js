const path = require('path');
/**
 * loader for app.json
 */
module.exports = function appJsonLoader(code) {
  const json = JSON.parse(code);
  const pages = json.pages;
  let content = '';
  pages.forEach((x) => {
    let absPath = path.resolve(this.rootContext, x);
    content += `import '${absPath}?folder!=!${absPath}';`;
  });
  return content;
};
