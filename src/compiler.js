const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
class MiniAppCompiler {
  /**
   *
   * @param {string} context
   */
  constructor(context) {
    this.context = context;
  }
  run() {
    const entry = this.getEntry();
    this.compile({
      entry,
      context: this.context,
    });
  }
  /**
   *
   * @param {{context: string, entry:string}} options
   */
  compile(options) {
    webpack({
      entry: options.entry,
      context: options.context,
    });
  }
  getEntry() {
    let entry = [];
    ['app.less', 'app.json', 'app.ts', 'app.js', 'app.css'].forEach((x) => {
      let absPath = path.resolve(this.context, x);
      if (fs.existsSync(absPath)) {
        entry.push(absPath);
      }
    });
    return entry;
  }
}

exports.MiniAppCompiler = MiniAppCompiler;
