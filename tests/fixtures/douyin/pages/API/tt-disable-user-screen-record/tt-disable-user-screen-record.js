Page({
  disable: function() {
    tt.disableUserScreenRecord({
      success(res) {
        console.log("disableUserScreenRecord 调用成功", res)
        tt.showToast({
          title: "禁止录屏成功",
          duration: 2000,
        })
      },
      fail(res) {
        console.log("disableUserScreenRecord 调用失败", res);
      },
    })
  },
})