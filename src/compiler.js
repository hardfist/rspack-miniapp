const path = require('path');

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
  getWebpackInstance() {
    const webpack = require('webpack');
    return webpack;
  }
  /**
   *
   * @param {{context: string, entry:string}} options
   */
  compile(options) {
    console.log('options:', options);
    const webpack = this.getWebpackInstance();
    webpack(
      {
        mode: 'development',
        devtool: false,
        entry: options.entry,
        context: options.context,
        output: {
          path: path.resolve(options.context, 'dist'),
        },
        experiments: {
          css: true,
        },
        module: {
          rules: [
            {
              resourceQuery: /\?appJson$/,
              use: [path.resolve(__dirname, './loaders/appJsonLoader.js')],
            },
            {
              resourceQuery: /\?folder$/,
              use: [path.resolve(__dirname, './loaders/folderLoader.js')],
            },
            {
              resourceQuery: /\?folderJson$/,
              use: [path.resolve(__dirname, './loaders/folderJsonLoader.js')],
            },
            {
              test: /\.ttss$/,
              use: [path.resolve(__dirname, './loaders/ttssLoader.js')],
              type: 'css',
              resolve: {
                preferRelative: true,
              },
            },
            {
              test: /\.ttml$/,
              use: [path.resolve(__dirname, './loaders/ttmlLoader.js')],
            },
          ],
        },
      },
      (err, stats) => {
        if (err) {
          console.error('buile error:', err);
          return;
        }
        if (stats.hasErrors()) {
          const errors = stats.toString();
          console.log('build failed:', errors);
        } else {
          console.info('build success');
        }
        const json = stats.toJson({
          all: true,
        });
        fs.writeFileSync(path.resolve(this.context, 'dist/stats.json'), JSON.stringify(json, null, 2));
      },
    );
  }
  getEntry() {
    let entry = [];
    ['app.less', 'app.json', 'app.ts', 'app.js', 'app.css'].forEach((x) => {
      let absPath = path.resolve(this.context, x);
      if (fs.existsSync(absPath)) {
        if (x === 'app.json') {
          entry.push(`app.js?appJson!=!${absPath}`);
        } else {
          entry.push(absPath);
        }
      }
    });

    return entry;
  }
}

exports.MiniAppCompiler = MiniAppCompiler;
