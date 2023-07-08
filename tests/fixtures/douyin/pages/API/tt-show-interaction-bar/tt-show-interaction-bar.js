Page({
  showInteractionBar() {
    tt.showInteractionBar({
      success(res) {
        console.log('showInteractionBar success', res);
      },
      fail(err) {
        console.log('showInteractionBar fail', err);
      },
      complete(res) {
        console.log('showInteractionBar complete', res);
        res.errMsg && tt.showToast({
          title: res.errMsg,
          icon: "none"
        });
      }
    })
  }
})