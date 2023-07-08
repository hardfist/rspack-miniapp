Page({
  setNavigationBarColor(e) {
    tt.setNavigationBarColor({
      frontColor: e.currentTarget.dataset.frontColor,
      backgroundColor: e.currentTarget.dataset.backgroundColor,
      success(res) {
        console.log('setNavigationBarColor success', res);
      },
      fail(res) {
        console.log('setNavigationBarColor fail', res);
      },
      complete(res) {
        console.log('setNavigationBarColor complete', res);
      }
    });
  },
})