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
    // 停止
  stop() {
    this.videoContext.stop();
  },
   // 点播
  seek() {
    this.videoContext.seek(3);
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