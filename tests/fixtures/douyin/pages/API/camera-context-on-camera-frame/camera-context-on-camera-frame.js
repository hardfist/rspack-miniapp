let listener;
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
  onCameraFrame(e) {
    // 返回监听器 CameraFrameListener
    if (!this.ctx) {
      return tt.showToast({
        title: "请先创建CameraContext",
        icon: "none"
      })
    }
    listener = this.ctx.onCameraFrame((frame) => {
      console.log("相机实时帧数据: ",frame)
    });
    tt.showModal({
      title: "创建成功",
      content: "需通过调用 CameraFrameListener.start 方法开始监听帧数据",
      showCancel: false
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