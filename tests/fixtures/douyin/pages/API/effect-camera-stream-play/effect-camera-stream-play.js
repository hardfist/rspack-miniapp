Page({
  data: {
    stateArr: ['未开启', '开启失败', '相机资源申请成功', '已开启'],
    state: 0
  },
  onShow: function () {
    this.effectCameraStream = tt.createEffectCameraStream(this);
  },
  requestEffectCamera() {
    if(this.state > 1) return tt.showToast({
      title: '相机资源已占用，不能重复申请', // 内容
      icon: 'none', // 图标
    });

    this.effectCameraStream.onError(this.onCameraError);
    this.effectCameraStream.onRequest(this.onRequest);
    this.effectCameraStream.onPlay(this.onPlay);

    this.effectCameraStream.request({
      orientation: "front",
    });
  },
  onCameraError(error) {
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
    tt.showToast({
      title: '相机资源申请成功',
    });
    this.setData({
      state: 2
    })
  },
  play() {
    if(this.state === 3) return tt.showToast({
      title: '相机已打开', 
    });

    this.effectCameraStream.play();
  },
  onPlay(cameraVideo) {
    tt.showToast({
      title: "相机已打开", 
    });
    this.setData({
      state: 3
    })
    console.log("相机数据对象", cameraVideo);
  },
});