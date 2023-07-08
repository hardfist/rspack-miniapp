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
  setWaterMark() {
    this.livePlayerContext.setWaterMark({
      enable: true,
      color: "#FFFF11",
      success: () => {
        console.log("setWaterMark success");
      },
      fail: (err) => {
        console.log("setWaterMark fail: ",err);
      },
      complete: () => {
        console.log("setWaterMark complete");
      },
    });
  }
});