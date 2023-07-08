Page({
  async onReady() {
    try {
      this.videoContext = tt.createVideoContext('myVideo');
      console.log('this.videoContext', this.videoContext);
    } catch (err) {
      console.log(err);
    }
  },
  getComponent() {
    return new Promise((resolve, reject) => {
      this.selectComponent('#createVdeo', res => {
        if (res) {
          resolve(res);
          return;
        }
        reject('获取组件实例出错')
      });
    })
  },
  play() {
    this.videoContext.play();
    tt.showToast({
      title: 'play',
      icon: 'none'
    });
  },
  stop() {
    this.videoContext.stop();
    tt.showToast({
      title: 'stop',
      icon: 'none'
    });
  },
  pause() {
    this.videoContext.pause();
    tt.showToast({
      title: 'pause',
      icon: 'none'
    });
  },
  seek() {
    this.videoContext.seek(10);
    tt.showToast({
      title: '跳转到10s处',
      icon: 'none'
    });
  },
  fullScreen() {
    this.videoContext.requestFullScreen();
  },
})