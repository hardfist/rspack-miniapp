Page({
  onLoad() {
    tt.showNavigationBarLoading();
  },
  hideBarLoading() {
    tt.hideNavigationBarLoading({
      success(res) {
        console.log('hideNavigationBarLoading success', res);
      },
      fail(err) {
        console.log('hideNavigationBarLoading fail', err);
      },
      complete(res) {
        console.log('hideNavigationBarLoading complete', res);
      }
    })
  }
})