Page({
  requestEffectCamera() {
    if(this.effectCameraStream) {
      return tt.showToast({
        title: '不能重复创建特效相机实例', // 内容
      });
    }
      
    this.effectCameraStream = tt.createEffectCameraStream(this);
    this.effectCameraStream.onError(this.onCameraError);
    this.effectCameraStream.onRequest(this.onRequest);
    this.effectCameraStream.onPlay(this.onPlay);
    this.effectCameraStream.onStop(this.onStop);
    tt.createSelectorQuery()
      .select("#myCanvas")
      .node()
      .exec((res) => {
        console.log("select query", res);
        this.canvas = res[0].node;
        this.canvasCtx = this.canvas.getContext("webgl");

        this.effectCameraStream.request({
          orientation: "back",
        });
      });
  },
  onCameraError(error) {
    console.log("onError", error);
    const { type, errMsg } = error;
    tt.showModal({
      title: `onError ${type}`,
      content: errMsg,
    });
  },
  onRequest() {
    console.log("相机资源申请成功");
    this.effectCameraStream.play();
  },
  onPlay(cameraVideo) {
    this.cameraStatus = "play";
    console.log("相机数据", cameraVideo);
    tt.showToast({
      title: "相机打开",
    });
    this.paint();
  },
  addOnPlay() {
    if (this.effectCameraStream) {
      this.effectCameraStream.onPlay(this.onPlay);
    }
  },
  onStop() {
    this.cameraStatus = "stop";
    tt.showToast({
      title: "相机暂停",
    });
  },
  offStop() {
    if (this.effectCameraStream) {
      this.effectCameraStream.offPlay(this.onPlay);
    }
  },
  play() {
    if (this.effectCameraStream) {
      this.effectCameraStream.play();
    }
  },
  stop() {
    if (this.effectCameraStream) {
      this.effectCameraStream.stop();
    }
  },
  paint() {
    this.effectCameraStream.paintTo({
      canvas: this.canvasCtx.canvas,
      dx: 0,
      dy: 0,
      sx: 0,
      sy: 0,
      success: () => {},
      fail: (error) => {
        console.error("paint fail", error);
      },
    });
    this.requestId = this.canvas.requestAnimationFrame(() => {
      this.cameraStatus === "play" && this.paint();
    });
  },
  onHide() {
    if (this.effectCameraStream) {
      this.canvas.cancelAnimationFrame(this.requestId);
      this.effectCameraStream.offRequest(this.onRequest);
      this.effectCameraStream.offPlay(this.onPlay);
      this.effectCameraStream.offStop(this.offStop);
      this.effectCameraStream.offError(this.onCameraError);
      this.effectCameraStream.dispose();
      this.effectCameraStream = null;
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
        state: '已释放'
      })
    }
  },
});