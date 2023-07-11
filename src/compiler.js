const path = require('path');
const minicssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
class MiniAppCompiler {
  /**
   *
   * @param {string} context
   * @param {boolean} watch
   */
  constructor(context, watch) {
    this.context = context;
    this.watch = watch;
  }
  run() {
    const entry = this.getEntry();
    this.compile({
      entry,
      context: this.context,
    });
  }
  getWebpackInstance() {
    if (process.env.Rspack) {
      console.info('using rspack');
      const rspack = require('@rspack/core').rspack;
      return rspack;
    }
    console.info('using webpack');
    const webpack = require('webpack');
    return webpack;
  }
  /**
   *
   * @param {{context: string, entry:string}} options
   */
  compile(options) {
    const webpack = this.getWebpackInstance();
    webpack(
      {
        mode: 'development',
        devtool: false,
        entry: {
          'app.worker': {
            import: options.entry,
          },
          app: {
            import: options.entry,
          },
        },
        context: options.context,
        output: {
          path: path.resolve(options.context, 'dist'),
        },
        externals: ['vue'],

        resolve: {
          extensions: ['.ts', '...'],
        },
        experiments: {
          css: true,
        },
        module: {
          rules: [
            {
              test: /\.ttml$/,
              use: [path.resolve(__dirname, './loaders/ttmlLoader.js')],
            },
            {
              test: /\.ts$/,
              use: [
                {
                  loader: require.resolve('swc-loader'),
                  options: {
                    jsc: {
                      parser: {
                        syntax: 'typescript',
                      },
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\?appJson$/,
              use: [path.resolve(__dirname, './loaders/appJsonLoader.js')],
              type: 'javascript/auto',
            },
            {
              resourceQuery: /\?folder$/,
              use: [path.resolve(__dirname, './loaders/folderLoader.js')],
            },
            {
              resourceQuery: /\?folderJson$/,
              use: [path.resolve(__dirname, './loaders/folderJsonLoader.js')],
              type: 'javascript/auto',
            },
            {
              test: /\.ttss$/,
              use: [path.resolve(__dirname, './loaders/ttssLoader.js')],
              resolve: {
                preferRelative: true,
              },
              type: 'css',
            },
            // {
            //   test: /\.ttss$/,
            //   use: [path.resolve(__dirname, './loaders/ttssLoader.js')],
            //   resolve: {
            //     preferRelative: true,
            //   },
            // },
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
      console.log('context:', this.context);
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
