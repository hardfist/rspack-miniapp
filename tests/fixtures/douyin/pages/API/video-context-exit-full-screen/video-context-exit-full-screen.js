Page({
  videoContext: undefined,
  onReady() {
    this.videoContext = tt.createVideoContext("myVideo");
  },
  // 播放
  play() {
    this.videoContext.play();
  },
  // 进入全屏
  requestFullScreen() {
    this.videoContext.requestFullScreen({ direction: 0 });
  },
  // 退出全屏
  exitFullScreen() {
    this.videoContext.exitFullScreen();
  },
});