const app = getApp();
const musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';
// const musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0003.mp3';


Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playImage: true,
    playFont: "播放",
  },
  onLoad() {
    const backgroundAudioManager = tt.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(res => {
      console.log("play!!!!!!!!!!!!!1");
    });
    backgroundAudioManager.onStop(res => {
      console.log("onStop!!!!!!!!!!!!!1");
    });
    backgroundAudioManager.onPause(res => {
      console.log("onPause!!!!!!!!!!!!!");
    });
    backgroundAudioManager.onEnded(() => {
      console.log("onEnded!!!!!!!!!!!!!");
    })
    backgroundAudioManager.onError((e) => {
      console.log("error  !!!!!!!!!!!!!1",e);
    })
    this.backgroundAudioManager = backgroundAudioManager;
  },
  play() {
    this.setData({
      playImage: !this.data.playImage
    })
    if (!this.data.playImage) {
      this.backgroundAudioManager.src = musicUrl;
    } else {
      this.backgroundAudioManager.stop();
      this.setData({
        playFont: "停止"
      })
    }
  }
})
