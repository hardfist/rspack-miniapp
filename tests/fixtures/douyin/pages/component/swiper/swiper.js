Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular
    });
  },
  changeVertical(e) {
    this.setData({
      vertical: !this.data.vertical
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    });
  },
  animationFinish(e){
    console.log(e.detail);
  },
  transition(e){
    console.log(e.detail);
  }
});