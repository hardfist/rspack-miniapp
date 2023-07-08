Page({
  onLoad() {
    tt.showInteractionBar({});
  },
  hideInteractionBar() {
    tt.hideInteractionBar({
      success(res) {
        console.log('hideInteractionBar success', res);
      },
      fail(err) {
        console.log('hideInteractionBar fail', err);
      },
      complete(res) {
        console.log('hideInteractionBar complete', res);
        res.errMsg && tt.showToast({
          title: res.errMsg,
          icon: "none"
        });
      }
    })
  }
})