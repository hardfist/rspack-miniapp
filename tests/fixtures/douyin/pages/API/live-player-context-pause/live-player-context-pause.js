Page({
  livePlayerContext: undefined,
  data: {
    livePlay: true,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 暂停 or 继续
  pause() {
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