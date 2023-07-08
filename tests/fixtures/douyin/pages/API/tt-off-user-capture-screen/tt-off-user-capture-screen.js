

const handler = (cb) => {
  cb()
};


Page({
  data: {
    captured: false
  },
  onLoad: function (options) {
    tt.onUserCaptureScreen(handler(() => {
      this.setData({
        captured: true
      });
    }));
  },
  offUserCaptureScreen() {
    tt.offUserCaptureScreen(handler((res) => {
      this.setData({
        captured: false
      }, () => {
        tt.showToast({
          title: '已卸载截屏事件',
          icon: 'none'
        });
      })
    }));
  }
})