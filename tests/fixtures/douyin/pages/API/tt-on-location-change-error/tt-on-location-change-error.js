const changeCallback = (res) => {
  console.log("location change: ", res);
};
const errorCallback = (err) => {
  console.log("location change error: ", err);
};
Page({
  onLoad: function () {
    tt.onLocationChange(changeCallback)
    tt.onLocationChangeError(errorCallback)
  },
  startListen() {
    tt.startLocationUpdate({
      success: (res) => {
        console.log('开始监听成功', res)
      },
      fail(err) {
        console.log('开始监听失败', err)
      }
    })
  },
  stopListen() {
    tt.stopLocationUpdate({
      success: (res) => {
        console.log('停止监听成功', res)
      },
      fail(err) {
        console.log('停止监听失败', err)
      }
    });
  },
  onUnload() {
    tt.offLocationChange(changeCallback);
    tt.offLocationChangeError(errorCallback);
  }
})
