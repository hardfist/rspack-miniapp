Page({
  login() {
    tt.login({
      success() {
        tt.showToast({
          title: '登录成功',
          icon: 'success',
        });
      },
      fail() {
        tt.showToast({
          title: '登录失败',
          icon: 'fail',
        });
      },
    });
  },

  handleError(e) {
    console.log(`${e.detail.errNo}: ${e.detail.errMsg}`)
  },
})
