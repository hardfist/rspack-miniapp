const getUserInfo = () => {
  return login().then(loginRes => new Promise((resolve, reject) => {
    tt.getUserInfo({
      withCredentials: true,
      success: function (res) {
        tt.showToast({
          title: 'success'
        });
        console.info('get user info data is ', res);
        resolve(loginRes);
      },

      fail() {
        tt.showModal({
          title: '调用 getUserInfo 失败，检查是否需要 login'
        });
        reject(loginRes);
      }

    });
  }));
};

Page({
  onLoad: function () {
    var that = this;
    tt.checkSession({
      success: function () {
        that.setData({
          hasLogin: true
        });
      },
      fail: function () {
        that.setData({
          hasLogin: false
        });
      }
    });
  },
  data: {
    hasLogin: false,
    code: tt.getStorageSync('login.code')
  },
  login: function () {
    getUserInfo().then(loginInfo => {
      this.setData(loginInfo);
    });
  }
});