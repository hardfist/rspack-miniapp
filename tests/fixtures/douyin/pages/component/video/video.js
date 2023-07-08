function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

Page({
  onReady: function (res) { },
  inputValue: '',
  data: {
    src: '',
    isFullscreen: false,
    isLoopPlay: false,
    isAutoPlay:false,
    isShowPlayBtn: true,
    isShowPlaybackRate:false,
    isShowControls: true,
    playBtnPosition: 'center',
    objectFitNum: 0,
    objectFitType: 'contain',
    poster: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
    preRollUnitId: '2k735ltco0o7gg0s46',
    postRollUnitId:"hefbc5g67f9g1axb6p",
    isMuted: false,
    isShowMute: false,
    isVslideGesture: false,
    isFullVslideGesture: true,
    isProgressGesture: false,
    isPlayGesture: false,
    direction:'-90',
    directionNum:0,
    isPlayInBackground:false
  },
  bindadended(e) {
    tt.showToast({
      title: "bindadended：贴片广告播放结束",
      icon:"none"
    });
    console.log('广告播放结束', e);
  },
  bindadload(e) {
    tt.showToast({
      title: "bindadload：贴片广告加载成功",
      icon:"none"
    });
    console.log('广告加载成功', e);
  },
  bindaderror(e) {
    tt.showToast({
      title: "bindaderror：贴片广告播放出错",
      icon:"none"
    });
    console.log('广告出错', e);
  },
  bindadclose(e) {
    tt.showToast({
      title: "bindadclose：贴片广告结束播放",
      icon:"none"
    });
    console.log('关闭广告', e);
  },
  bindadstart(e) {
    tt.showToast({
      title: "bindadstart：贴片广告开始播放",
      icon:"none"
    });
    console.log('播放广告', e);
  },
  bindwaiting(e) {
    tt.showToast({
      title: "bindwaiting：触发视频缓冲事件",
      icon:"none"
    });
    console.log('bindwaiting：视频正在缓冲', e);
  },
  bindtimeupdate(e) {
    console.log('播放进度变化', e);
  },
  bindended(e) {
    tt.showToast({
      title: "bindended：触发视频播放结束事件",
      icon:"none"
    });
    console.log('bindpause：视频已经播放结束', e);
  },
  bindpause(e) {
    tt.showToast({
      title: "bindpause：触发视频暂停事件",
      icon:"none"
    });
    console.log('视频暂停了', e);
  },
  bindplay(e) {
    tt.showToast({
      title: "bindplay：触发视频播放事件",
      icon:"none"
    });
    console.log('bindplay：视频开始播放了', e);
  },
  binderror(e) {
    tt.showToast({
      title: "binderror：触发视频播放出错事件",
      icon:"none"
    });
    console.log('binderror：视频播放出错了', e);
  },
  bindfullscreenchange(e){
    tt.showToast({
      title: "bindfullscreenchange：触发监听视频是否全屏事件",
      icon:"none"
    });
    console.log(e.detail.fullScreen?'bindfullscreenchange：进入全屏了':'bindfullscreenchange：退出全屏了', e);
  },
  bindloadedmetadata(e){
    tt.showToast({
      title: "bindloadedmetadata：视频元数据加载完成",
      icon:"none"
    });
    console.log("bindloadedmetadata：视频元数据加载完成",e);
  },
  bindseekcomplete(e){
    console.log("bindseekcomplete：跳转播放完成",e);
  },
  bindplaybackratechange(e){
    tt.showToast({
      title: "bindplaybackratechange：视频倍速改变完成",
      icon:"none"
    });
    console.log("bindplaybackratechange：视频倍速改变完成",e);
  },
  bindmutechange(e){
    tt.showToast({
      title: "bindmutechange：静音状态改变完成",
      icon:"none"
    });
    console.log("bindmutechange：静音状态改变完成",e);
  },
  bindcontroltap(e){
    console.log("bindcontroltap：点击了控件",e);
  },
  bindenterbackground(e){
    console.log("bindenterbackground：进入小窗播放",e);
  },
  bindclosebackground(e){
    console.log("bindclosebackground：关闭小窗播放",e);
  },
  bindleavebackground(e){
    console.log("bindleavebackground：离开小窗进入app",e);
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap: function () {
    var that = this;
    tt.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  
  switchFullScreen() {
    this.setData({
      isFullscreen: !this.data.isFullscreen
    });
  },

  switchLoopPlay() {
    this.setData({
      isLoopPlay: !this.data.isLoopPlay
    });
  },

  switchPlayBtn() {
    this.setData({
      isShowPlayBtn: !this.data.isShowPlayBtn
    });
  },

  switchShowPlaybackRate() {
    this.setData({
      isShowPlaybackRate: !this.data.isShowPlaybackRate
    });
  },
  switchControls() {
    this.setData({
      isShowControls: !this.data.isShowControls
    });
  },

  switchPlayBtnPosition() {
    console.log('switchPlayBtnPosition:', this.data.playBtnPosition);
    this.setData({
      playBtnPosition: this.data.playBtnPosition === 'center' ? 'bottom' : 'center'
    });
  },

  switchFit() {
    const objectFitEnum = ['contain', 'fill', 'cover'];
    this.setData({
      objectFitType: objectFitEnum[this.data.objectFitNum % 3],
      objectFitNum: this.data.objectFitNum + 1
    },()=>{
      tt.showToast({
        title: "裁剪模式已切换为"+ this.data.objectFitType,
        icon:"none"
      });
    });
  },
  switchMuted() {
    this.setData({
      isMuted: !this.data.isMuted
    });
  },
  switchMuteShow() {
    this.setData({
      isShowMute: !this.data.isShowMute
    });
  },
  switchVslideGesture() {
    this.setData({
      isVslideGesture: !this.data.isVslideGesture
    });
  },
  switchFullVslideGesture() {
    this.setData({
      isFullVslideGesture: !this.data.isFullVslideGesture
    });
  },
  switchProgressGesture() {
    this.setData({
      isProgressGesture: !this.data.isProgressGesture
    });
  },
  switchPlayGesture() {
    this.setData({
      isPlayGesture: !this.data.isPlayGesture
    });
  },
  switchDirection() {
    const directionENum = ['-90', '0', '90'];
    this.setData({
        direction: directionENum[this.data.directionNum % 3],
        directionNum: this.data.directionNum + 1
    },()=>{
      tt.showToast({
        title: "方向已切换为 "+ this.data.direction +" 度",
        icon:"none"
      });
    })
  },
  switchPlayInBackground() {
    this.setData({
      isPlayInBackground: !this.data.isPlayInBackground,
    })
  }
});