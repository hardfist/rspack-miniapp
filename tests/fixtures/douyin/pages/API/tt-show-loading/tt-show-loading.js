Page({
  toast1Tap: function () {
    tt.showLoading({
      title: "加载中",
      success(res) {
        console.log('showLoading success', res);
      },
      fail(err) {
        console.log('showLoading fail', err);
      },
      complete(res) {
        console.log('showLoading complete', res);
      }
    })
  },
  onUnload(){
    tt.hideLoading();
  }


});