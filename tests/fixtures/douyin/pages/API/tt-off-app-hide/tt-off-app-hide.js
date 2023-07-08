Page({
  data: {
    result: "",
    isOffAppHide: false,
  },
  callback() {
    this.setData({
      result: "切后台成功"
    })
  },
  onLoad: function (options) {
    tt.onAppHide(this.callback)
  },
  clearResult() {
    this.setData({
      result: ''
    })
  },
  offAppHide() {
    tt.offAppHide(this.callback);
    console.log("offAppHide success");
    this.setData({
      isOffAppHide: true
    })
    tt.showToast({
      title: "已取消监听小程序切后台事件",
      icon: "none",
      duration: 3000,
    });
  },
})