Page({
  data: {
    result: ''
  },
  scanCode: function () {
    var that = this;
    tt.scanCode({
      success: function (res) {
        if (typeof res.result === 'string') {
          that.setData({
            result: res.result
          });
        } else {
          tt.showModal({
            title: 'Type Error',
            content: typeof res.result
          });
        }
      },
      fail: function (res) {
        tt.showToast({
          title: 'scanCode Fail'
        });
      }
    });
  }
});