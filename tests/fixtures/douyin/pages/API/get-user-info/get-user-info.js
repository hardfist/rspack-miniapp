var app = getApp();
Page({
  data: {
    hasUserInfo: false,
    withCredentials: false,
    userInfo: {}
  },
  getUserInfo: function () {
    var that = this;
    tt.getUserInfo({
      withCredentials: that.data.withCredentials,
      success: function (res) {
        that.setData({
          hasUserInfo: true,
          userInfo: res.userInfo
        });
      },

      fail() {
        tt.showModal({
          title: '调用 getUserInfo 失败，检查是否需要 login'
        });
      }

    });
  },

  getUserGender() {
    let genderText = '未知';

    switch (gender) {
      case 0:
        genderText = '未知';
        break;

      case 1:
        genderText = '男';
        break;

      case 2:
        genderText = '女';
        break;
    }

    return genderText;
  },

  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    });
  }
});