Page({
  livePlayerContext: undefined,
  data: {
    livePlay: false,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 播放 or 停止
  play() {
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