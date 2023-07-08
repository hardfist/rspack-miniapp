Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    tt.onGetWifiList( res => {
      this.setData({
        list: res.wifiList
      })
    });
  },
  getWifiList(){
    tt.getWifiList();
  }
})