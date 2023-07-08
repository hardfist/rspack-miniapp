Page({
  data: {
    err: ""
  },
  onLoad: function (options) {
    tt.onError(e => {
      // 监听到在 handleTap 中的 throw error
      // 打印出来的结果是
      // USER_RUNTIME_ERROR: at pages/index/index tap event handleTap error
      console.log(e);
      this.setData({
        err: e
      })
    });
  },
  handleTap() {
    throw new Error("handleTap error"); // 当触发该函数时，会报错 Uncaught Error: handleTap error
  },
  clearErr() {
    this.setData({
      err: ''
    })
  }
})