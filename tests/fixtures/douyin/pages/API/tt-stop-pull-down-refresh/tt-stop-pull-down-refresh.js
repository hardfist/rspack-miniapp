Page({
  onLoad() {
    tt.startPullDownRefresh();
  },
  stopPullDownRefresh() {
    tt.stopPullDownRefresh({
      success(res) {
        console.log('stopPullDownRefresh调用成功', res);
      },
      fail(err) {
        console.log('stopPullDownRefresh 调用失败', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }
    })
  }
})
