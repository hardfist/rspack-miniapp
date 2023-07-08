Page({
  data: {
    result: ""
  },
  checkSession() {
    tt.checkSession({
      success: (res) => {
        console.log(`tt.checkSession success`, res);
        this.setData({
          result: "session 未过期，登录态有效"
        })
      },
      fail: (err) => {
        console.log(`tt.checkSession failed`, err);
        this.setData({
          result: "session 已过期，登录态失效，需要重新登录"
        })
      },
      complete: () => {
        console.log(`tt.checkSession completed`);
      }
    });
  }
})