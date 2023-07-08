function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  const hour = parseInt(time / 3600);
  time = time % 3600;
  const minute = parseInt(time / 60);
  time = time % 60;
  const second = time;
  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

const dataUrl = 'https://tosv.byted.org/obj/developer-inner/qa/07.mp3';
const defaultFormatedTime = '00:00:00';
const app = getApp();
Page({
  data: {
    formatedCurrentTime: defaultFormatedTime,
    formatedDuration: defaultFormatedTime,
    duration: 0,
    currentTime: 0,
    playing: false,
    paused: false,
  },
  onShow: function() {
    if (this.innerAudioCtx) {
      return;
    }
    this.canUpdateUI = true;
    const inneraudioctx = this.innerAudioCtx = tt.createInnerAudioContext();
    inneraudioctx.src = dataUrl;
    inneraudioctx.startTime = 0;
    inneraudioctx.autoplay = false;
    inneraudioctx.loop = false;
    inneraudioctx.obeyMuteSwitch = false;
    inneraudioctx.onCanplay(() => {
      console.log("onCanplay");
      this.updateUI();
    });
    inneraudioctx.onPlay(() => {
      console.log("onPlay");
      this.updateUI();
    });
    inneraudioctx.onPause(() => {
      console.log("onPause");
      this.updateUI();
    });
    inneraudioctx.onTimeUpdate(() => {
      this.updateUI();
    });
    inneraudioctx.onSeeking(() => {
      console.log("onSeeking");
      this.updateUI();
    });
  },
  updateUI() {
    const inneraudioctx = this.innerAudioCtx;
    if (this.canUpdateUI) {
      this.setData({
        formatedCurrentTime: formatTime(parseInt(inneraudioctx.currentTime || 0) || 0) || defaultFormatedTime,
        formatedDuration: formatTime(parseInt(inneraudioctx.duration) || 0) || defaultFormatedTime,
        duration: parseInt(inneraudioctx.duration) || 0,
        currentTime: inneraudioctx.currentTime || 0,
        playing: !inneraudioctx.paused
      });
    }
  },
  onUnload() {
    if (this.innerAudioCtx) {
      this.innerAudioCtx.offCanplay();
      this.innerAudioCtx.destroy();
    }
  },
  play() {
    this.innerAudioCtx.play();
  },
  seek(e) {
    // 参数为跳转的时间(单位: s)
    this.innerAudioCtx.seek(30);
  },
  pause() {
    this.innerAudioCtx.pause();
  }
});
