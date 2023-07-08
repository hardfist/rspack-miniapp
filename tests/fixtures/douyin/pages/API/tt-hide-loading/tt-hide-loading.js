Page({
  onLoad() {
    tt.showLoading({
      title: "加载中"
    })
  },
  toast1Tap () {
    tt.hideLoading({
      noConflict: true, // 设置noConflict为true，只会关闭showToast，不会关闭showLoading
      success(res) {
        console.log('hideLoading success', res);
      },
      fail(err) {
        console.log('hideLoading fail', err);
      },
      complete(res) {
        console.log('hideLoading complete', res);
      }
    })
  },
  onUnload(){
    tt.hideLoading();
  }

});
