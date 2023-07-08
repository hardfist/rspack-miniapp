Page({
  onLoad: function () {
    let that = this;
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
    let that = this;
    tt.login({
      force: true,
      success(res) {
        const { code, errMsg, anonymousCode, isLogin } = res;
        console.log(`tt-login success`, errMsg);
        console.log(`code(临时登录凭证, 有效期 3 分钟) : `, code);
        console.log(`anonymousCode(用于标识当前设备, 无论登录与否都会返回, 有效期 3 分钟) : `, anonymousCode);
        console.log(`isLogin(判断在当前 APP（头条、抖音等）是否处于登录状态) : `, isLogin);
        that.setData({
          hasLogin: true
        });
        tt.showToast({
          title: "登录成功"
        })
      },
      fail(err) {
        tt.showModal({
          title: '登录失败',
          content: JSON.stringify(err),
          showCancel: false
        });
        console.log(`tt-login failed`, err.errMsg);
      },
      complete(res) {
        console.log(`tt-login completed`);
      }
    });
  }
});