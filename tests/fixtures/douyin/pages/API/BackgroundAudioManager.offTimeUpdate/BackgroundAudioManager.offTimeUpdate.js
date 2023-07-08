let musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';

const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playing: false,
    paused: false,
    onTimeUpdate: true,
    count: 0
  },
  onLoad() {
    const bgam = tt.getBackgroundAudioManager();
    this.backgroundAudioManager = bgam;
    this.canUpdateUI = true;
    bgam.startTime = 0;
    bgam.title = "测试背景音乐";
    bgam.audioPage = {path:"pages/API/BackgroundAudioManager.play"};
    bgam.onPlay(() => {
      this.updateUI();
    });
    bgam.onPause(() => {
      this.updateUI();
    });
    bgam.onStop(() => {
      this.updateUI();
      this.setData({
        count: 0
      });
    });
    bgam.onEnded(() => {
      this.updateUI();
    });
    bgam.onTimeUpdate(() => {
      this.updateUI();
      this.setData({
        onTimeUpdate:true,
        count: ++this.data.count
      });
    });
  },
  updateUI() {
    var bgam = this.backgroundAudioManager;
    if (this.canUpdateUI) {
      this.setData({
        playing: !bgam.paused
      });
    }
  },
  pause() {
    this.backgroundAudioManager.pause();
    this.updateUI();
  },
  play() {
    if(!this.backgroundAudioManager.src) {
      this.backgroundAudioManager.src = musicUrl;
    }
    this.backgroundAudioManager.play();
    this.updateUI();
  },
  stop() {
    this.backgroundAudioManager.stop();
    this.updateUI();
  },
  offTimeUpdate(){
    this.backgroundAudioManager.offTimeUpdate();
    this.setData({
      onTimeUpdate:false,
      count: 0
    });
    tt.showToast({
      title: '取消监听成功'
    });
  }
});
