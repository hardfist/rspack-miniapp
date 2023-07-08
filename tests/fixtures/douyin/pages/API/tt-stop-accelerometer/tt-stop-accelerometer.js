Page({
  data: {
    acc: {},
    stop: true
  },
  onShow() {
    var that = this;
    tt.onAccelerometerChange(function (res) {
      that.setData({
        acc: res,
        stop: false
      });
    });
  },
  stop() {
    if (this.data.stop) {
      return;
    }
    this.setData({
      stop: true
    });
    tt.stopAccelerometer({
      success: function (res) {
        tt.showToast({
          title: '停止监听'
        });
      },
      fail(err) {
        tt.showToast({
          title: '停止监听失败'
        });
      }
    });
  }
});