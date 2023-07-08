const axios = require("axios");
const appCodeLinkUrl = "https://tma-doc.apps.bytedance.net/docs/ideCodeLink";
const gameCodeLinkUrl =
  "https://tma-doc.apps.bytedance.net/docs/ideGameCodeLink";
function updateCodeLink(url) {
  return axios.post(url, {
    timeout: 300000,
  });
}
function exit() {
  setTimeout(() => {
    process.exit(0);
  }, 300000);
}
async function main() {
  try {
    exit();
    await Promise.all([
      updateCodeLink(appCodeLinkUrl),
      updateCodeLink(gameCodeLinkUrl),
    ]);
  } catch (e) {
    console.log("请求超时，codeLink不一定更新失败，可以在轻服务数据表检查一下");
  }
  return true;
}
main();
