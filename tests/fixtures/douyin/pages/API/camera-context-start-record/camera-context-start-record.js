Page({
  data: {
    src: "",
  },
  onLoad: function (options) {
    tt.getSetting({
      success: (res) => {
        const cameraAllowed = res.authSetting["scope.camera"];
        if (!cameraAllowed) {
          tt.showToast({
            title: "请授权相机后重新进入", // 内容
            success: (res) => {
              this.auth();
            },
          });
        }
      },
      fail: (err) => {
        tt.showModal({
          title: "获取授权失败",
          content: JSON.stringify(err),
        });
      },
    });
  },

  auth() {
    tt.authorize({
      scope: "scope.camera",
      success: () => {
        tt.showToast({
          title: "授权成功",
        });
        tt.reLaunch({
          url: "/pages/index/index", // 指定页面的url
        });
      },
      fail: (err) => {
        tt.showModal({
          title: "授权失败",
          content: JSON.stringify(err),
        });
      },
    });
  },
  startRecord() {
    if(!this.ctx) {
      this.ctx = tt.createCameraContext();
    }
    this.ctx.startRecord({
      timeoutCallback: (res) => {
        console.log('timeoutCallback', res);
        this.setData({
          src: res.tempVideoPath
        })
      },
      success: (res) => {
        console.log('success', res);
      },
      fail(err) {
        console.log('fail', err);
      },
    })
  },
  stopRecord() {
    if(!this.ctx) {
      this.ctx = tt.createCameraContext();
    }
    this.ctx.stopRecord({
      compressed: true,
      success: (res) => {
        console.log('success', res);
        this.setData({
          src: res.tempVideoPath
        })
      },
      fail(err) {
        console.log('fail', err);
      },
    })
  },

});