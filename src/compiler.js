const path = require('path');
class MiniAppCompiler {
  /**
   *
   * @param {string} context
   */
  constructor(context) {
    this.context = context;
  }
  run() {
    const config = this.loadConfig();
    console.log('cofnig:', config);
  }
  loadConfig() {
    const appJsonPath = path.resolve(this.context, './app.json');
    console.log('xxxx:', appJsonPath);
    const appJson = require(appJsonPath);
    console.log('apJson:', appJson);
  }
}

exports.MiniAppCompiler = MiniAppCompiler;
