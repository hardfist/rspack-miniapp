Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    tip: false
  },
  getUserInfo: function () {
    let that = this;
    tt.getUserInfo({
      withCredentials: false,
      success: (res) => {
        console.log(`tt.getUserInfo success,获取的用户信息: `, res);
        that.setData({
          hasUserInfo: true,
          userInfo: res.userInfo,
          tip: false
        });
      },

      fail: (err) => {
        console.log(`tt.getUserInfo failed`, err.errMsg);
        tt.showModal({
          title: '获取用户信息失败',
          content: JSON.stringify(err),
          showCancel: false
        });
        that.setData({
          tip: true
        });
      },

      complete: () => {
        console.log(`tt.getUserInfo completed`);
      }

    });
  },

  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    });
  }
});