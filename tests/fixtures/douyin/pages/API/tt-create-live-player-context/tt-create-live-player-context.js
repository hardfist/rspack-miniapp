Page({
  data: {
    autoplay: false,
    src: "https://sf3-ttcdn-tos.pstatp.com/obj/developer/bytdance.flv",
    objectFit: "contain",
    orientation: "vertical",
    muted: false,
    pause: false,
    fullScreen: false,
    signature: {
      enable: false,
      content: "bytedance",
      position: 0,
      color: "#FFFF11",
    },
  },
  onReady() {
    try {
      this.livePlayerContext = tt.createLivePlayerContext("myLivePlayer");
      console.log("this.livePlayerContext", this.livePlayerContext);
    } catch (err) {
      console.log("createLivePlayerContext fail: ", err);
    }
  },
  onFullScreenChange(e) {
    this.setData({
      fullScreen: e.detail.fullScreen
    })
  },
  onError(err) {
    console.log("直播播放出错了: ", err);
  },
  livePlay() {
    this.livePlayerContext.play();
  },
  liveStop() {
    this.livePlayerContext.stop();
  },
  liveMute() {
    this.setData({
      muted: !this.data.muted,
    });
    if (this.data.muted) {
      this.livePlayerContext.mute();
    } else {
      this.livePlayerContext.unmute();
    }
  },
  fullScreen() {
    if (this.data.fullScreen) {
      this.livePlayerContext.exitFullScreen();
    } else {
      this.livePlayerContext.requestFullScreen();
    }
  },
  livePause() {
    if (this.data.pause) {
      this.livePlayerContext.resume();
    } else {
      this.livePlayerContext.pause();
    }
    this.setData({
      pause: !this.data.pause,
    });
  },
  setWaterMark() {
    this.livePlayerContext.setWaterMark({
      enable: true,
      color: "#FFFF11",
      success: (res) => {
        console.log("setWaterMark success: ", res);
      },
      fail: (err) => {
        console.log("setWaterMark fail: ", err);
      },
      complete: () => {
        console.log("setWaterMark complete");
      },
    });
  },
});
