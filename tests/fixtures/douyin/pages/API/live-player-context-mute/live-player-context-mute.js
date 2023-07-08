Page({
  livePlayerContext: undefined,
  data: {
    liveMute: false,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },

  // 静音 or 不静音
  mute() {
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