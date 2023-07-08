Page({
  data: {
    webview_url: "https://m.toutiao.com/i6834015878997082632/"
  },

  onLoad(option) {
    if (option.url) {
      this.setData({
        webview_url: decodeURIComponent(option.url)
      });
    }
  },
  bindload(res) {
    console.log('网页已经加载完', res);
  },
  binderror(err) {
    console.log('页面加载失败', err);
  },
  bindmessage(e) {
    console.log('接收消息', e);
  }

});