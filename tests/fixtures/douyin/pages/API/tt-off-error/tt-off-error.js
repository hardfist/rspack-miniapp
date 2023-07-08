Page({
  data: {
    err: "",
    isOffError: false
  },
  onLoad() {
    tt.onError(this.handleError);
  },
  handleTap() {
    throw new Error("handleTap error"); // 当触发该函数时，会报错 Uncaught Error: handleTap error
  },
  clearErr() {
    this.setData({
      err: ''
    })
  },
  offError() {
    // 取消错误监听事件 this.handleError
    tt.offError(this.handleError);
    this.setData({
      isOffError: true
    })
    tt.showToast({
      title: "已取消监听小程序切后台事件",
      icon: "none",
      duration: 3000,
    });
  },
  handleError(e) {
    console.log(e);
    this.setData({
      err: e
    })
  },
})