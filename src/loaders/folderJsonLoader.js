module.exports = function folderJsonLoader(code) {
  let content = '';
  const json = JSON.parse(code);
  if (json.usingComponents) {
    Object.entries(json.usingComponents).forEach(([key, value]) => {
      console.log('key:', key, value);
      content += `import '${value}';`;
    });
  }
  return content;
};
