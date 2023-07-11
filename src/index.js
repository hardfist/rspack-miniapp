const utils = require('util');
const path = require('path');
const { MiniAppCompiler } = require('./compiler');
function run() {
  const args = utils.parseArgs({
    options: {
      project: {
        type: 'string',
      },
      watch: {
        type: 'boolean',
      },
    },
  });
  let project = path.resolve(process.cwd(), args.values.project);
  const compiler = new MiniAppCompiler(project, args.values.watch);
  compiler.run(() => {
    console.log('build finished');
  });
}

run();
