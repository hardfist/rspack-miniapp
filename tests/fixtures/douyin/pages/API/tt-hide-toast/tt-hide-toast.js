Page({
  onLoad() {
    tt.showToast({
      title: "加载中",
      duration: 60000,
      icon: 'loading'
    });
  },
  hideToast () {
    tt.hideToast({
      noConflict: true, // 设置noConflict为true，只会关闭showToast，不会关闭showLoading
      success(res) {
        console.log('success 执行了', res);
      },
      fail(err) {
        console.log('fail 执行了', err);
      },
      complete(res) {
        console.log('complete 执行了', res);
      }
    });
  },
  onUnload(){
    tt.hideToast();
  }

});