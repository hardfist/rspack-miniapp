Page({
  data: {
    screenOn: "屏幕常亮已关闭"
  },
  keepScreenOn(e){
    let status = e.currentTarget.dataset.status;
    let that = this;
    tt.setKeepScreenOn({
      keepScreenOn: status,
      success(res) {
        that.setData({
          screenOn: status?'屏幕常亮已开启':'屏幕常亮已关闭'
        })
      },
      fail(res) {
        console.log(`setKeepScreenOn调用失败`,res);
      },
    });
  }
})