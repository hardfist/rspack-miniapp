Page({
  livePlayerContext: undefined,
  data: {
    liveMute: true,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 不静音 or 静音
  unmute() {
    if (this.data.liveMute) {
      this.livePlayerContext.unmute();
    } else {
      this.livePlayerContext.mute();
    }
    this.setData({
      liveMute: !this.data.liveMute,
    });
  },
});