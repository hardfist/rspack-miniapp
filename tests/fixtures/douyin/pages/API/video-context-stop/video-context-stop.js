Page({
  videoContext: undefined,
  onReady() {
    this.videoContext = tt.createVideoContext("myVideo");
  },
    // 播放
  play() {
    this.videoContext.play();
  },
    // 停止
  stop() {
    this.videoContext.stop();
  },
});