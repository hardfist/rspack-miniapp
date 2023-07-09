const fs = require('fs');
const path = require('path');
module.exports = function folderLoader(code) {
  let content = '';
  ['.js', '.ts', '.ttml', '.ttss', '.json'].forEach((x) => {
    let absPath = this.resource.replace(/\.[^.]+$/, x);
    if (fs.existsSync(absPath)) {
      if (x === '.json') {
        content += `import '${absPath}?folderJson!=!${absPath}';`;
      } else {
        content += `import '${absPath}';`;
      }
    }
  });
  return content;
};
