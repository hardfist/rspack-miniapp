function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;
  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

let musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';
// let musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0003.mp3';

const defaultFormatedTime = '00:00:00';
const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    formatedCurrentTime: defaultFormatedTime,
    formatedDuration: defaultFormatedTime,
    duration: 0,
    currentTime: 0,
    playing: false,
    paused: false
  },
  onLoad() {
    const bgam = tt.getBackgroundAudioManager();
    this.backgroundAudioManager = bgam;
    this.canUpdateUI = true;
    bgam.startTime = 0;
    bgam.title = "测试背景音乐";
    bgam.audioPage = {path:"pages/API/BackgroundAudioManager.play/BackgroundAudioManager.play",query:{name:''}};
    bgam.obeyMuteSwitch = false;
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
    bgam.onTimeUpdate(() => {
      this.updateUI();
    });
    bgam.onSeeked(() => {
      this.updateUI();
    });
  },
  updateUI() {
    var bgam = this.backgroundAudioManager;
    if (this.canUpdateUI) {
      this.setData({
        formatedCurrentTime: formatTime(parseInt(bgam.currentTime || 0) || 0) || defaultFormatedTime,
        formatedDuration: formatTime(parseInt(bgam.duration) || 0) || defaultFormatedTime,
        duration: parseInt(bgam.duration) || 0,
        currentTime: bgam.currentTime || 0,
        playing: !bgam.paused
      });
    }else {
      this.setData({
        formatedCurrentTime: formatTime(parseInt(bgam.currentTime || 0) || 0) || defaultFormatedTime
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
  seeking(e) {
    this.canUpdateUI = false;
  },
  seek(e) {
    this.canUpdateUI = true;
    this.backgroundAudioManager.seek(e.detail.value);
    tt.showToast({
      title: '已跳转到指定位置'
    });
  }
});
