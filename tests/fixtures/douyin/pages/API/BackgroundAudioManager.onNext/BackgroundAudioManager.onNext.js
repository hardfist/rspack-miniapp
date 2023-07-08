let musicUrls = [
  'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0002.mp3',
  'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3',
  'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0003.mp3'
  ];

const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playing: false,
    paused: false,
    curSrc: 1
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
    });
    bgam.onEnded(() => {
      this.updateUI();
    });
    bgam.onNext(() => {
      this.setData({
        curSrc: ++this.data.curSrc
      })
      if(this.data.curSrc>=musicUrls.length){
        this.setData({
          curSrc: 0
        })
      }
      this.backgroundAudioManager.src = musicUrls[this.data.curSrc];
      this.updateUI();
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
      this.backgroundAudioManager.src = musicUrls[1];
    }
    this.backgroundAudioManager.play();
    this.updateUI();
  },
  stop() {
    this.backgroundAudioManager.stop();
    this.updateUI();
  }
});
