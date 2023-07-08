const utils = require('util');
const { MiniAppCompiler } = require('./compiler');
function run() {
  const args = utils.parseArgs({
    options: {
      project: {
        type: 'string',
      },
    },
  });
  const compiler = new MiniAppCompiler(args.project);
  compiler.run(() => {
    console.log('build finished');
  });
}

run();
