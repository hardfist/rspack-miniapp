const test = require('node:test');
const path = require('path');
const Compiler = require('../../src/compiler').MiniAppCompiler;
test('basic build', () => {
  const basicFixture = path.resolve(__dirname, '../fixtures/basic');
  console.log('fix:', basicFixture);
  const compiler = new Compiler(basicFixture);
  compiler.run();
});
