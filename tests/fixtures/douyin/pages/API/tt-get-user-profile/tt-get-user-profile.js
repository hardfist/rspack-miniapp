Page({
  data: {
    userInfo: null,
  },

  getUserProfile() {
    tt.getUserProfile({
      success: (res) => {
        console.log('tt.getUserProfile success，获取的用户信息：', res);

        this.setData({
          userInfo: res.userInfo,
        });
      },

      fail(err) {
        console.log('tt.getUserProfile failed', err.errMsg);

        tt.showModal({
          title: '获取用户信息失败',
          content: JSON.stringify(err),
          showCancel: false,
        });
      },

      complete() {
        console.log('tt.getUserProfile completed');
      },
    });
  },

  clear() {
    this.setData({
      userInfo: null,
    });
  },

  login() {
    tt.login();
  },
});