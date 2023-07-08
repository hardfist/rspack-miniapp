Page({
  livePlayerContext: undefined,
  data: {
    livePlay: false,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 继续 or 暂停
  resume() {
    if (this.data.livePlay) {
      this.livePlayerContext.pause();
    } else {
      this.livePlayerContext.resume();
    }
    this.setData({
      livePlay: !this.data.livePlay,
    });
  },
});