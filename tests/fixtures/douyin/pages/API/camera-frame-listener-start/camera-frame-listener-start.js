let listener = null;
Page({
  data: {
    counter: 0,
    frameWidth: 0,
    frameHeight: 0,
  },
  onLoad(options) {
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
        });
      },
    });
  },
  startOnFrame(e) {
    if (!this.ctx) {
      return tt.showToast({
        title: "请先创建CameraContext",
        icon: "none"
      })
    }
    // 返回监听器 CameraFrameListener
    listener = this.ctx.onCameraFrame((frame) => {
      let { width, height, data } = frame;
      this.setData({
        counter: this.data.counter + 1,
        frameWidth: width,
        frameHeight: height,
      });
    });

    listener.start({
      success: (res) => {
        console.log("CameraFrameListener.start success: ",res);
        tt.showToast({ title: "开始接收帧数据" });
      },
      fail: (err) => {
        console.log("CameraFrameListener.start fail: ",err);
        tt.showModal({
          title: "接收失败",
          content: JSON.stringify(err),
        });
      },
      complete: (res) => {
        console.log("CameraFrameListener.start complete");
      }
    });
  },
  stopOnFrame() {
    if (!listener) {
      return tt.showToast({
        title: "请先创建监听器",
        icon: "none"
      })
    }
    listener.stop({
      success: (res) => {
        tt.showToast({ 
          title: "停止接收帧数据",
          icon: "none",
          success: ()=>{
            this.setData({
              counter: 0
            });
          }
        });
      },
      fail: (err) => {
        tt.showModal({
          title: "停止接收出错",
          content: JSON.stringify(err),
        });
      },
    });
  },
  onError(err) {
    tt.showModal({
      title: "相机出错了",
      content: JSON.stringify(err),
    });
  },
});