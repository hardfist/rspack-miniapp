Page({
  data: {
    state: '未开启'
  },
  onShow: function () {
    this.effectCameraStream = tt.createEffectCameraStream(this);
    if(!this.effectCameraStream) { return }
    this.effectCameraStream.onError(this.onError);
    this.effectCameraStream.onRequest(this.onRequest);
    this.effectCameraStream.onPlay(this.onPlay);
  },
  requestEffectCamera() {
    this.effectCameraStream.request({
      orientation: "front",
    });
  },
  onError(error) {
    console.log("onError", error);
    const { type, errMsg } = error;
    tt.showModal({
      title: `onError ${type}`,
      content: errMsg,
    });
    this.setData({
      state: '开启失败'
    })
  },
  onRequest() {
    console.log("相机资源申请成功");
    this.effectCameraStream.play();
  },
  offRequest() {
    this.effectCameraStream.offRequest(this.onRequest);
  },
  onPlay(cameraVideo) {
    tt.showToast({
      title:  "相机打开", // 内容
    });
    this.setData({
      state: '已开启'
    })
    console.log("相机数据对象", cameraVideo);
  },
});