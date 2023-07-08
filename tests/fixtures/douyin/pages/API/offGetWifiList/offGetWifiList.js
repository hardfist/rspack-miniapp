Page({
  data: {
    list: [],
    isOffListen: false
  },
  onLoad(options) {
    tt.onGetWifiList(this.callback);
  },
  callback(res) {
    this.setData({
      list: res.wifiList
    })
  },
  getWifiList() {
    this.data.isOffListen && tt.showModal({
      content: "已取消监听获取到 Wi-Fi 列表数据事件",
      showCancel: false
    });
    tt.getWifiList();
  },
  offWifiList() {
    tt.offGetWifiList(this.callback);
    this.setData({
      list: [],
      isOffListen: true
    })
  }
})