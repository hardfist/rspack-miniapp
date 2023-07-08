const app = getApp();
let dataUrl = 'https://tosv.byted.org/obj/developer-inner/qa/07.mp3';
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playing: false,
    paused: false,
    innerAudioContext: ""
  },
  onLoad() {
    if (this.innerAudioContext) {
      return;
    }
    this.canUpdateUI = true;
    const innerAudioContext = this.innerAudioContext = tt.createInnerAudioContext();
    this.setData({
      innerAudioContext: innerAudioContext
    })
    innerAudioContext.src = dataUrl;
    innerAudioContext.startTime = 0;
    innerAudioContext.obeyMuteSwitch = false;
    innerAudioContext.onCanplay(() => {
      console.log("onCanplay");
      this.updateUI();
    });
    innerAudioContext.onPlay(() => {
      console.log("onPlay");
      this.updateUI();
    });
    innerAudioContext.onPause(() => {
      console.log("onPause");
      this.updateUI();
    });
    innerAudioContext.onStop(() => {
      console.log("onStop");
      this.updateUI();
    });
    innerAudioContext.onError((err) => {
      console.log("onError: ", err);
    });
  },
  updateUI() {
    if (this.canUpdateUI) {
      this.setData({
        playing: !this.innerAudioContext.paused
      });
    }
  },
  onUnload() {
    if (this.innerAudioContext) {
      this.innerAudioContext.offCanplay();
      this.innerAudioContext.destroy();
    }
  },
  pause() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.pause();
  },
  play() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.play();
  },
  stop() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.stop();
  },
  destroy(){
    this.innerAudioContext.destroy();
    this.setData({
      innerAudioContext: ""
    })
    this.innerAudioContext = ""
  }
});