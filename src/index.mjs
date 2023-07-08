import utils from 'util';
const args = utils.parseArgs({
  options: {
    project: {
      type: 'string',
    },
  },
});
console.log({ args });
