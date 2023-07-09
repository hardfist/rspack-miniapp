const test = require('node:test');
const path = require('path');
const Compiler = require('../../src/compiler').MiniAppCompiler;
test('douyin', () => {
  const basicFixture = path.resolve(__dirname, '../fixtures/douyin');
  console.log('fix:', basicFixture);
  const compiler = new Compiler(basicFixture);
  compiler.run();
});
test('tutorial', { only: true }, () => {
  const basicFixture = path.resolve(__dirname, '../fixtures/tutorial');
  console.log('fix:', basicFixture);
  const compiler = new Compiler(basicFixture);
  compiler.run();
});
