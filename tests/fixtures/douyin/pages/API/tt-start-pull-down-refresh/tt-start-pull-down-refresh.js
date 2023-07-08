Page({
  startPullDownRefresh() {
    tt.startPullDownRefresh({
      success(res) {
        console.log(`startPullDownRefresh调用成功`);
        setTimeout(() => {
          tt.stopPullDownRefresh();
        }, 10000);
      },
      fail(res) {
        console.log(`startPullDownRefresh调用失败`);
      },
      complete(res) {
        console.log('complete执行了', res);
      }
    });
  }
})
