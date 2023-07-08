const countdown = 60000;
let cdtimer = null;
Page({
  data: {
    cd: countdown,
    isStart: false,
    isPlay: false,
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
    // 监听录音开始事件
    this.recorderManager.onStart(() => {
      this.setData({
        isStart: true,
        isPlay: true,
        cd: countdown
      });
      this.startCountDown();
    });
    // 监听录音暂停事件
    this.recorderManager.onPause(() => { 
      this.setData({
        isPlay: false
      });
      clearInterval(cdtimer);
      console.log("已暂停录音");
    });
    // 监听录音继续事件
    this.recorderManager.onResume(() => {
      this.setData({
        isPlay: true
      });
      this.startCountDown();
      console.log("已继续录音");
    });
    // 监听录音停止事件
    this.recorderManager.onStop((res) => {
      clearInterval(cdtimer);
      this.setData({
        isStart: false,
        isPlay: false,
        cd: countdown
      });
      console.log("已停止录音,录音文件的地址为: ",res.tempFilePath);
    });
    // 监听录音错误事件
    this.recorderManager.onError(err => {
      console.error("录音错误: ",err.errMsg);
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
          // 开始录音
          that.recorderManager.start(that.data.options);
          console.log("已开始录音");
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
    // 停止录音
    this.recorderManager.stop();
  },
  pause(){
    // 暂停录音
    this.recorderManager.pause();
  },
  resume(){
    // 继续录音
    this.recorderManager.resume();
  },
  startCountDown() {
    clearInterval(cdtimer);
    cdtimer = setInterval(() => {
      this.setData({
        cd: this.data.cd - 100
      });
    }, 100);
  }
})