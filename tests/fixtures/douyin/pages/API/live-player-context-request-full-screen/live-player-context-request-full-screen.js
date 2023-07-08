Page({
  livePlayerContext: undefined,
  data: {
    livePlay: false,
    fullScreen: false,
  },
  onReady() {
    this.livePlayerContext = tt.createLivePlayerContext("livePlayer");
  },
  // 根据全屏变化事件改变对应状态
  onFullScreenChange(e) {
    this.setData({
      fullScreen: e.detail.fullScreen
    })
  },
  screenHander() {
    if (this.data.fullScreen) {
      this.livePlayerContext.exitFullScreen();
    } else {
      this.livePlayerContext.requestFullScreen();
    }
  },
});