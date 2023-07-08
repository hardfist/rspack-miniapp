const app = getApp();
let dataUrl = 'https://tosv.byted.org/obj/developer-inner/qa/07.mp3';
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playing: false,
    paused: false
  },
  onLoad() {
    if (this.innerAudioCtx) {
      return;
    }
    this.canUpdateUI = true;
    const innerAudioCtx = this.innerAudioCtx = tt.createInnerAudioContext();
    innerAudioCtx.src = dataUrl;
    innerAudioCtx.startTime = 0;
    innerAudioCtx.obeyMuteSwitch = false;
    innerAudioCtx.onCanplay(() => {
      console.log("onCanplay");
      this.updateUI();
    });
    innerAudioCtx.onPlay(() => {
      console.log("onPlay");
      this.updateUI();
    });
    innerAudioCtx.onPause(() => {
      console.log("onPause");
      this.updateUI();
    });
    innerAudioCtx.onStop(() => {
      console.log("onStop");
      this.updateUI();
    });
    innerAudioCtx.onError((err) => {
      console.log("onError: ", err);
    });
  },
  updateUI() {
    if (this.canUpdateUI) {
      this.setData({
        playing: !this.innerAudioCtx.paused
      });
    }
  },
  onUnload() {
    if (this.innerAudioCtx) {
      this.innerAudioCtx.offCanplay();
      this.innerAudioCtx.destroy();
    }
  },
  pause() {
    this.innerAudioCtx.pause();
  },
  play() {
    this.innerAudioCtx.play();
  },
  stop() {
    this.innerAudioCtx.stop();
  },
});