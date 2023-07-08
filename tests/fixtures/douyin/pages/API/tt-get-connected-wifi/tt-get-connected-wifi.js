Page({
  data: {
    wifiInfo: {}
  },
  getdWifiInfo(){
    tt.getConnectedWifi({
      success: res => {
        this.setData({
          wifiInfo: res
        })
      },
      fail: res => {
        console.log(`getConnectedWifi调用失败${res}`);
      },
    });
  }
})