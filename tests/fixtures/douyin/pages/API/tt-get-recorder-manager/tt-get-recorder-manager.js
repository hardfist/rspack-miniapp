var DEFAULT_COUNT_DOWN = 60000;
var cdtimer;
Page({
  data: {
    cd: DEFAULT_COUNT_DOWN,
    isRecording: false,
    isPaused: false,
    recordOption: {
      duration: DEFAULT_COUNT_DOWN,
      sampleRate: 16000,
      encodeBitRate: 48000,
      numberOfChannels: 2,
      format: 'aac',
      frameSize: 100
    },
    recordFilePath: ''
  },
  startCountDown() {
    this.setData({
      cd: DEFAULT_COUNT_DOWN
    });
    clearInterval(cdtimer);
    cdtimer = setInterval(() => {
      this.setData({
        cd: this.data.cd - 100
      });
    }, 100);
  },
  pauseCountDown() {
    clearInterval(cdtimer);
  },
  continueCountDown() {
    clearInterval(cdtimer);
    cdtimer = setInterval(() => {
      this.setData({
        cd: this.data.cd - 100
      });
    }, 100);
  },
  stopCountDown() {
    clearInterval(cdtimer);
    this.setData({
      cd: DEFAULT_COUNT_DOWN
    });
  },
  onLoad: function(options) {
    this.recorderManager = tt.getRecorderManager();
    this.recorderManager.onStart(() => {
      this.setData({
        isRecording: true,
        recordFilePath: '',
        isPaused: false
      });
      this.startCountDown();
    });
    this.recorderManager.onResume(() => {
      this.setData({
        isRecording: true,
        isPaused: false
      });
      this.continueCountDown();
    });
    this.recorderManager.onPause(() => {
      this.setData({
        isRecording: false,
        isPaused: true
      });
      this.pauseCountDown();
    });
    this.recorderManager.onStop(({
      tempFilePath
    }) => {
      this.setData({
        isRecording: false,
        isPaused: false,
        recordFilePath: tempFilePath
      });
      this.stopCountDown();
      tt.showToast({
        title: '录音结束'
      });
    });
    this.recorderManager.onFrameRecorded(({
      frameBuffer,
      isLastFrame
    }) => {});
    this.recorderManager.onError(err => {
      console.error(err);
    });
  },
  onUnload: function() {
    this.stop();
    clearInterval(cdtimer);
  },
  start() {
    if (this.data.isRecording) {
      tt.showToast({
        title: '正在录音'
      });
    } else {
      this.recorderManager.start(this.data.recordOption);
    }
  },
  pauseorresume() {
    if (this.data.isPaused) {
      this.recorderManager.resume();
    } else {
      this.recorderManager.pause();
    }
  },
  stop() {
    this.recorderManager.stop();
  }
});
