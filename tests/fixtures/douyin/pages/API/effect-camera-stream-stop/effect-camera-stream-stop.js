Page({
  data: {
    stateArr: ['未开启','相机出错','已开启','已关闭','已释放'],
    state: 0
  },
  requestEffectCamera() {
    if(!this.effectCameraStream) {
      this.effectCameraStream = tt.createEffectCameraStream(this);
      this.effectCameraStream.onError(this.onError);
      this.effectCameraStream.onRequest(this.onRequest);
      this.effectCameraStream.onPlay(this.onPlay);
      this.effectCameraStream.onStop(this.onStop);
      this.effectCameraStream.request({
        orientation: "front",
      });
    }
  },
  stopEffectCamera() {
    if (this.effectCameraStream) {
      this.effectCameraStream.stop();
    }
  },
  disposeEffectCamera() {
    if (this.effectCameraStream) {
      this.effectCameraStream.dispose();
      this.effectCameraStream = null;
      tt.showToast({
        title: "相机资源释放",
      });
      this.setData({
        state: 4
      })
    }
  },
  onError(error) {
    console.log("onError", error);
    const { type, errMsg } = error;
    tt.showModal({
      title: `onError ${type}`,
      content: errMsg,
    });
    this.setData({
      state: 1
    })
  },
  onRequest() {
    console.log("相机资源申请成功");
    this.effectCameraStream.play();
  },
  onPlay(cameraVideo) {
    tt.showToast({
      title: "相机打开", // 内容
    });
    this.setData({
      state: 2
    })
    console.log("相机数据", cameraVideo);
  },
  onStop() {
    tt.showToast({
      title: "相机关闭", // 内容
    });
    this.setData({
      state: 3
    })
  },
});