Page({
  data: {
    acc: {},
    stop: true
  },
  start: function () {
    var that = this;
    tt.startAccelerometer({
      success: function (res) {
        tt.showToast({
          title: '开始监听'
        });
        tt.onAccelerometerChange(function (res) {
          that.setData({
            acc: res,
            stop: false
          });
        });
      },
      fail(err) {
        tt.showToast({
          title: '开始监听失败'
        });
      }
    });
  }
});