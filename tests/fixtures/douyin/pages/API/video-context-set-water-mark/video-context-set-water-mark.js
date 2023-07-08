Page({
  videoContext: undefined,
  onReady() {
    this.videoContext = tt.createVideoContext("myVideo");
  },
  // 播放
  play() {
    this.videoContext.play();
  },
  // 暂停
  pause() {
    this.videoContext.pause();
  },
  // 设置水印
  setWaterMark() {
    this.videoContext.setWaterMark({
      enable: true,
      color: "#FFFF11",
      success: () => {
        console.log("setWaterMark success");
      },
      fail: (err) => {
        console.log("setWaterMark fail: ", err);
      },
      complete: () => {
        console.log("setWaterMark complete");
      },
    });
  },
});