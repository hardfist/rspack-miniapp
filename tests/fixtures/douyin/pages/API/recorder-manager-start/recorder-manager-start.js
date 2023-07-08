const countdown = 60000;
let cdtimer = null;
Page({
  data: {
    cd: countdown,
    isStart: false,
    options: {
      duration: countdown,
      sampleRate: 12000,
      numberOfChannels: 1,
      encodeBitRate: 25000,
      frameSize: 100,
    }
  },
  onLoad() {
    this.recorderManager = tt.getRecorderManager();
    this.recorderManager.onStart(() => {
      this.setData({
        isStart: true
      });
      this.startCountDown();
    });
  },
  onUnload: function() {
    this.stop();
  },
  start() {
    const that = this;
    tt.authorize({
      scope: "scope.record",
      success: function (res) {
        console.log("已允许授权录音功能: ", res.errMsg);
        if (res.data["scope.record"] === "ok") {
          that.recorderManager.start(that.data.options);
        }
      },
      fail: function (res) {
        console.log("已拒绝授权录音功能:",res.errMsg);
        if (res.data['scope.record'] === 'auth deny') {
          tt.showToast({
            title: '用户已拒绝授权录音功能',
            duration,
            icon: 'none'
          });
        };
      },
    });
  },
  stop() {
    this.recorderManager.stop();
    clearInterval(cdtimer);
    this.setData({
      isStart: false,
      cd: countdown
    });
    console.log("已停止录音");
  },
  startCountDown() {
    this.setData({
      cd: countdown
    });
    clearInterval(cdtimer);
    cdtimer = setInterval(() => {
      this.setData({
        cd: this.data.cd - 100
      });
    }, 100);
  }
})