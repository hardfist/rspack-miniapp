Page({
  livePlayerContext: undefined,
  data: {
    livePlay: true,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 停止 or 播放
  stop() {
    if (this.data.livePlay) {
      this.livePlayerContext.stop();
    } else {
      this.livePlayerContext.play();
    }
    this.setData({
      livePlay: !this.data.livePlay,
    });
  },
});