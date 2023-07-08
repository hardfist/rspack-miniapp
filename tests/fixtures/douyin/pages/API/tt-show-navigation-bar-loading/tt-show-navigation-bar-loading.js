Page({
  showBarLoading() {
    tt.showNavigationBarLoading({
      success(res) {
        console.log('showNavigationBarLoading success', res);
      },
      fail(err) {
        console.log('showNavigationBarLoading fail', err);
      },
      complete(res) {
        console.log('showNavigationBarLoading complete', res);
      }
    })
  }
})