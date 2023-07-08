Page({
  data: {
    showQuery: {},
  },
  callback(res) {
    const params = Object.assign({}, res);
    params.query = params.query && JSON.stringify(params.query);
    params.referrerInfo = params.referrerInfo && JSON.stringify(params.referrerInfo);
    this.setData({
      showQuery: params,
    });
  },
  onLoad: function (options) {
    tt.onAppShow(this.callback);
  },
  offAppShow() {
    tt.offAppShow(this.callback);
    console.log("offAppShow success");
    tt.showToast({
      title: "已取消监听小程序切前台事件",
      icon: "none",
      duration: 3000,
    });
  },
  clearAllAttr() {
    this.setData({
      showQuery: {},
    });
  },
});
