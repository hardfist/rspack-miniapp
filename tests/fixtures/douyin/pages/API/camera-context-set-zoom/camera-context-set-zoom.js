Page({
  onLoad: function (options) {
    this.createContext();
  },
  createContext() {
    if (this.ctx){
      return tt.showToast({
        title: '已创建cameraContext ',
        icon: "none"
      });
    }
    tt.getSetting({
      success: (res) => {
        let cameraAllowed = res.authSetting["scope.camera"];
        if (cameraAllowed) {
          this.ctx = tt.createCameraContext();
        } else {
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
          success() {
            tt.reLaunch({
              url: "/pages/index/index",
            });
          },
        });
      },
      fail: (err) => {
        tt.showModal({
          title: "授权失败",
          content: JSON.stringify(err),
          showCancel: false
        });
      },
    });
  },
  setZoom(e) {
    if (!this.ctx) {
      return tt.showToast({
        title: "请先创建CameraContext",
        icon: "none"
      })
    }
    this.ctx.setZoom({
      zoom: 5,
      success(res) {
        tt.showToast({
          title: "设置的缩放级别为: " + res.zoom,
        });
      },
      fail(err) {
        tt.showModal({
          title: "设置缩放级别失败",
          content: "错误信息: " + JSON.stringify(err),
          showCancel: false
        });
      },
    });
  },
  resetZoom(e) {
    if (!this.ctx) {
      return tt.showToast({
        title: "请先创建CameraContext",
        icon: "none"
      })
    }
    this.ctx.setZoom({
      zoom: 1,
      success(res) {
        tt.showToast({
          title: "已重置",
        });
      },
      fail(err) {
        tt.showModal({
          title: "重置缩放级别失败",
          content: "错误信息: " + JSON.stringify(err),
          showCancel: false
        });
      },
    });
  },
  onError(err) {
    tt.showModal({
      title: "相机出错了",
      content: JSON.stringify(err),
      showCancel: false
    });
  },
});