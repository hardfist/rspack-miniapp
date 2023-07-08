Page({
  toRoute() {
    tt.reLaunch({
      url: 'tt-launch-page?param=reLaunch',
      success(res) {
        console.log('success执行了', res);
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }
    });
  }
})