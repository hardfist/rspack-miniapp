

const handler = (cb) => {
  cb()
};


Page({
  data: {
    record: false
  },
  onLoad: function (options) {
    tt.onUserScreenRecord(handler(() => {
      this.setData({
        record: true
      });
    }));
  },
  offUserScreenRecord() {
    tt.offUserScreenRecord(handler((res) => {
      this.setData({
        record: false
      }, () => {
        tt.showToast({
          title: '已卸载录屏事件',
          icon: 'none'
        });
      })
    }));
  }
})