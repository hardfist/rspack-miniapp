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
});