Page({
  onError(e) {
    tt.showModal({
      title: "相机出错",
      content: JSON.stringify(e),
      showCancel: false,
    });
  },
  createContext() {
    tt.getSetting({
      success: (res) => {
        let cameraAllowed = res.authSetting["scope.camera"];
        if (cameraAllowed) {
          this.ctx = tt.createCameraContext();
          tt.showToast({
            title: "创建成功",
            icon: "success"
          })
        } else {
          tt.showToast({
            title: "请授权相机权限后重新进入", // 内容
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
          showCancel: false
        });
      },
    });
  },
  auth() {
    tt.authorize({
      scope: "scope.camera",
      success: () => {
        tt.showToast({
          title: "授权成功"
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
  
});